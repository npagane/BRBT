package io.advantageous.ddp.world;

import java.util.*;
import java.util.ArrayList;
import java.util.Iterator;
import com.google.gson.internal.LinkedTreeMap;

public class World {

    public class Agent {
        public String name;
        public Number x;
        public Number y;
        public Number size;
        public Number num_cells;
        public Number ATP;
        public Number num_mito;
        public Agent(String name, Integer x, Integer y) {
            System.out.println("making an agent");
            this.name = name;
            this.x = x;
            this.y = y;
            this.size = 1;
        }

        public Agent(Player player) {
            this.name = player.id;//getName();
            Pair<Integer,Integer> xy = player.getLocation();
            this.x = xy.getKey();
            this.y= xy.getValue();
            this.size = player.getSize();
            this.num_cells = player.getNumCells();
            this.ATP = player.getATP();
            this.num_mito = player.getNumMito();
        }
        public String getName(){
            return this.name;
        }
        public String getLocation() {
            return "" + this.x + ", " + this.y;
        }
        
        @Override
        public String toString(){
            String s = "  ";
            s = s + this.name + " is at " + this.x + ", " +this.y;
            return s;
        }
    }

    private String message;
    private Number x_tiles;
    private Number y_tiles;
    private ArrayList<Agent> agents = new ArrayList<>();

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Number getXdim() {
        return this.x_tiles;
    }

    public void setXdim(Number x_tiles) {
        this.x_tiles = x_tiles;
    }

    public Number getYdim() {
        return this.y_tiles;
    }

    public void setYdim(Number y_tiles) {
        this.y_tiles = y_tiles;
    }

    
    public void addAgent(Player player) {
        //String name = player.getName();
        //Pair<Integer,Integer> xy = player.getLocation();
        //Agent ag = new Agent(name, xy.getKey(), xy.getValue());

        Agent ag = new Agent(player);
        
        this.agents.add(ag);
        return;
    }

    public int getAgentsSize() {
        return this.agents.size();
    }

    public Iterator getAgentIt() {
        return this.agents.iterator();
    }

    public String getName(int i) {
        // maybe worry about try/catch for index exception?
        Agent a = this.agents.get(i);
        return a.name;
    }

    public void setName(String name, int i) {
        this.agents.get(i).name = name;
    }

    public Number getX(int i) {
        return this.agents.get(i).x;
    }

    public void setX(Number x, int i) {
        this.agents.get(i).x = x;
    }

    public Number getY(int i) {
        return this.agents.get(i).y;
    }

    public void setY(Number y, int i) {
        this.agents.get(i).y = y;
    }

    public void update(TileMap tm) {
        
        //update agent list
        /*
        for (Iterator it = tm.getAgentIt(); it.hasNext();){
            ArrayList ra = (ArrayList) it.next();

            Pair xy = new Pair((int) ra.get(1), (int) ra.get(2));
            String name = (String) ra.get(0);
            Player p = new Player(name, xy);

            this.agents = null;
            this.addAgent(p);
        }
        */
        System.out.println("~~~~~~~updating world ob");

        this.agents = new ArrayList<>();

        for (Iterator it = tm.getAgentIt(); it.hasNext();){
            Player p = (Player) it.next();
            this.addAgent(p);
        }
        
    }

    public void print() {
        System.out.println("  print thinks num agents= " + this.getAgentsSize());
        System.out.println("  message: " + this.getMessage());
        System.out.println("  x tiles: " + this.getXdim());
        System.out.println("  y tiles: " + this.getYdim());
       
        //for (Agent e: this.agents) {
        //    System.out.println("  " + e.toString());
        //}
        for (Iterator i = this.agents.iterator(); i.hasNext();){
            System.out.println("  " + i.next().toString());
        } 

        /*
        for (int i = 0; i < this.getAgentsSize(); i++) {
            System.out.println(i);
            System.out.println("  agent_name: ");
            System.out.println(this.getName(i));
            System.out.println("    xy: " + this.agents.get(i).getLocation());
            //System.out.println("    y: " + this.getY(i));
        }
        */

        /*
        for (int i = 0; i < 2; i++) {
            System.out.println("  agent_name: " + this.agents[i]);
            System.out.println("    xy: " + this.agents.get(i).getLocation());
            //System.out.println("    y: " + this.getY(i));
        }
        */
        System.out.println("print finished");
    }

}