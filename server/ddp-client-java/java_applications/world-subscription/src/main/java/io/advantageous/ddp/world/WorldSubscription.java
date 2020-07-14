/*
 * Copyright (C) 2014. Geoffrey Chandler.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.advantageous.ddp.world;

import io.advantageous.ddp.*;
import io.advantageous.ddp.subscription.JsonObjectConverter;
import io.advantageous.ddp.subscription.MapSubscriptionAdapter;
import io.advantageous.ddp.subscription.Subscription;
import io.advantageous.ddp.subscription.SubscriptionAdapter;
import io.advantageous.ddp.subscription.message.AddedMessage;
import io.advantageous.ddp.subscription.message.ChangedMessage;

import org.glassfish.grizzly.nio.SelectorHandler.Task;
import org.glassfish.tyrus.client.ClientManager;
// working on 2 way communication
import io.advantageous.ddp.rpc.RPCClient;
import io.advantageous.ddp.rpc.RPCClientImpl;

import javax.websocket.WebSocketContainer;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;


/**
 * Simple example of a Meteor.js subscription.
 *
 * @author geoffc@gmail.com
 * @since 2/27/14 at 1:19 PM.
 */
public class WorldSubscription {

    /*
    private static void printWorld(World world) {
        System.out.println("  message: " + world.getMessage());
        System.out.println("  x_tiles: " + world.getXdim());
        System.out.println("  y_tiles: " + world.getYdim());
        for (int i = 0; i < world.getAgentsSize(); i++) {
             System.out.println("  agent_name: " + world.getName(i));
             System.out.println("    x: " + world.getX(i));
             System.out.println("    y: " + world.getY(i));
        }
        System.out.println();
    }
    */

    public static void main(String[] args) {

        WebSocketContainer container = ClientManager.createClient();
        MessageConverter messageConverter = new JsonMessageConverter();
        DDPMessageEndpoint endpoint = new DDPMessageEndpointImpl(container, messageConverter);
        // working on 2 way communication
        final RPCClient rpcClient = new RPCClientImpl(endpoint);

        Map<String, Map<String, Object>> dataMap = new HashMap<>();
        SubscriptionAdapter adapter = new MapSubscriptionAdapter(
                endpoint,
                new JsonObjectConverter(),
                dataMap
        );


        endpoint.registerHandler(ConnectedMessage.class, message -> {
            try {
                adapter.subscribe(new Subscription("server-world", World.class, "virtual-world"));
                System.out.println("connected to meteor server! session: " + message.getSession());
                //System.out.println(String.format("message tostring: %s", message.toString()));
            } catch (IOException e) {
                throw new IllegalStateException(e);
            }
        });

        endpoint.registerHandler(AddedMessage.class, DDPMessageHandler.Phase.AFTER_UPDATE, message -> {
            World test= (World) dataMap.get(message.getCollection()).get(message.getId());
            //System.out.println("Added a new world!");
            System.out.println(String.format("Added a new world : %s", message.getId()));
            System.out.println("");
            // respond to message with more data
            test.setMessage("setting");
            test.setXdim(10);
            test.setYdim(10);
            test.print();
            try {
                rpcClient.call("setWorld", new Object[]{test}, result -> {
                }, failureMessage -> {
                    failureMessage.getReason();
                });
            } catch (IOException e) {
                e.getMessage();
            }
        });

        //where all the action happens
        endpoint.registerHandler(ChangedMessage.class, DDPMessageHandler.Phase.AFTER_UPDATE, message -> {
            World test = (World) dataMap.get(message.getCollection()).get(message.getId());

           // System.out.println(String.format("World %s was modified:", message.getId()));
            //printWorld(test);

            if (test.getMessage().equals("clicked simulate")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                test.setMessage("simulate modified");
                // maybe instantiate world object here?
                //runSimulation();
                //run sim here

                System.out.println("starting sim");
                TileMap tm = new TileMap();
                // set these as x_dim/y_dim variables eventually
                tm.set(10,10);

                // make this into a for loop once we can get player data from meteor app
                Pair start1 = new Pair(0,0);
                Player p1 = new Player("@", start1);
                tm.addPlayer(p1, start1);
                //test.addAgent(p1);

                Pair start2 = new Pair(9,9);
                Player p2 = new Player("*", start2);
                tm.addPlayer(p2, start2);
                //test.addAgent(p2);

                //test.update(tm);
                updateWorld(test, tm, rpcClient);


                System.out.println("num of agents sim: " + test.getAgentsSize());//
                test.print();//

                /*
                try {
                    rpcClient.call("updateWorld", new Object[]{test}, result -> {
                    }, failureMessage -> {
                        failureMessage.getReason();
                    });
                   } catch (IOException e) {
                    System.out.println("caught e: " + e.getMessage());
                }
                */
            } //else {
            //    System.out.println("not ready, press simulate button?");
           // }

            /*
            if (test.getMessage().equals("loop")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                System.out.println("looped");
                printWorld((World) dataMap.get(message.getCollection()).get(message.getId()));
                try {
                    System.out.println("updating world");
                    rpcClient.call("updateWorld", new Object[]{test}, result -> {
                    }, failureMessage -> {
                        failureMessage.getReason();
                    });

                    System.out.println("updated?");
                    World mw = (World) dataMap.get(message.getCollection()).get(message.getId());
                    System.out.println("mw:");
                    printWorld(mw);
                } catch (IOException e) {
                    e.getMessage();
                }
            }
            */

            if (test.getMessage().equals("clicked simulate again")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                test.setMessage("simulate again modified");

                System.out.println("starting sim again");
                TileMap tm = new TileMap(test);

                // make this into a for loop once we can get player data from meteor app
                Pair start1 = new Pair(1,1);
                Player p1 = new Player("!", start1);
                tm.addPlayer(p1, start1);

                //test.update(tm);
                updateWorld(test, tm, rpcClient);
                test.print();

                /*
                try {
                    rpcClient.call("updateWorld", new Object[]{test}, result -> {
                    }, failureMessage -> {
                        failureMessage.getReason();
                    });
                   } catch (IOException e) {
                    System.out.println("caught e: " + e.getMessage());
                }
                */
            }//end simulate again

            if (test.getMessage().equals("cell movement")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                test.setMessage("cell movement modified");

                System.out.println("before: ");
                test.print();

                TileMap tm = new TileMap(test);

                for (int i = 0; i < 2; i++) {

                    for (Iterator it = tm.getAgentIt(); it.hasNext();) {
                        Player p = (Player) it.next();
                        System.out.println(p);
                        tm.movePlayer(p);

                        updateWorld(test, tm, rpcClient);
                    }
                }
            }//end cell movement

            if (test.getMessage().equals("grow")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                test.setMessage("grow modified");
                boolean done = false;

                System.out.println("before: ");
                test.print();

                TileMap tm = new TileMap(test);

                
            {//attempts at threading and executor services
                /*
                List<Thread> workers = new ArrayList<>(3);
                Iterator it = tm.getAgentIt();

                Player p1 = (Player) it.next();
                Player p2 = (Player) it.next();
                Player p3 = (Player) it.next();

                p1.start();
                p2.start();
                p3.start();
                */

                //ExecutorService threadPool = Executors.newFixedThreadPool(3);
                
                /*for (int i = 0; i < 3; i++) {
                    threadPool.submit(p.run)
                }
                */
            }
            
            
                int max_players = tm.agents.size();
                List<Player> workers = new ArrayList<>(16);

                for (Iterator it = tm.getAgentIt(); it.hasNext();) {
                    Player p = (Player) it.next();
                    //System.out.println(p);
                    workers.add(p);
                    p.setAction("grow");
                    p.start();            
                }

                while (!done) {
                    try {
                        updateWorld(test, tm, rpcClient);
                        Thread.sleep(1000);
                    } catch ( Exception e) {
                        System.out.println("Interrupted");
                    }

                    int num_dead = 0;
                    for (Player worker : workers) {
                        if (!worker.isAlive()) {
                            num_dead++;
                        }
                    }
                    if (num_dead == max_players) {
                        done = true;
                    }
                }

                /* thread.join
                try {
                    for (Player worker : workers) {
                        worker.join();
                    }    
                } catch ( Exception e) {
                    System.out.println("Interrupted");
                }   
                */
                updateWorld(test, tm, rpcClient);
                test.print();
                
            }//end grow

            if (test.getMessage().equals("compete1load")) {
                test = (World) dataMap.get(message.getCollection()).get(message.getId());
                System.out.println(String.format("World %s was modified:", message.getId()));
                test.setMessage("compete1 modified");
                boolean done = false;

                System.out.println("before: ");
                test.print();

                TileMap tm = new TileMap(test);
                
                updateWorld(test, tm, rpcClient);
                test.print();
            }//end compete1load


        }); //end changed message event handler


        //this runs before the action happens
        try {
            System.out.println("trying for a connection");
            endpoint.connect("ws://localhost:3000/websocket");
            endpoint.await();
        } catch (InterruptedException | IOException e) {
            System.out.print("caught e: ");
            e.printStackTrace();
        }

        System.out.println("end main");
    }

    public static void updateWorld(World test, TileMap tm, RPCClient rpcClient) {
        System.out.println("                           method update");
        test.update(tm);
        try {
            rpcClient.call("updateWorld", new Object[]{test}, result -> {
            }, failureMessage -> {
                failureMessage.getReason();
            });
           } catch (IOException e) {
            System.out.println("caught e: " + e.getMessage());
        }
    }

    //not being called right now
    public static void runSimulation() {
        System.out.println("start");
        TileMap tm=new TileMap();
        // set these as x_dim/y_dim variables eventually
        tm.set(10,10);

        // make this into a for loop once we can get player data from meteor app
        Pair start1 = new Pair(0,0);
        Player p1 = new Player("@", start1);
        tm.addPlayer(p1, start1);

        Pair start2 = new Pair(9,9);
        Player p2 = new Player("*", start2);
        tm.addPlayer(p2, start2);

        tm.print();

        for (int i = 0; i < 2; i++) {
            System.out.println("Round " + i);
            tm.movePlayer(p1);
            tm.print();
            tm.movePlayer(p2);
            tm.print();
        }

        System.out.println("finish");
    }
}
