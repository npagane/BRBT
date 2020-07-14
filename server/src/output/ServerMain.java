package output;
import javafx.util.Pair;

import java.io.IOException;
import java.net.ServerSocket;

public class ServerMain {


    public static void listenSocket() {
        try {
            ServerSocket s = new ServerSocket(4321);
            System.out.println("server socket made");
        } catch (IOException e) {
            System.out.println("Could not listen on port 4321");
            System.exit(-1);
        }
    }



    public static void main(String[]args){
        listenSocket();
        System.out.println("start");
        TileMap tm=new TileMap();
        tm.set(10,10);

        Pair start1 = new Pair(0,0);
        Player p1 = new Player("@", start1);
        tm.addPlayer(p1, start1);

        Pair start2 = new Pair(9,9);
        Player p2 = new Player("*", start2);
        tm.addPlayer(p2, start2);

        tm.print();

        for (int i = 0; i < 3; i++) {
            System.out.println("Round " + i);
            tm.movePlayer(p1);
            tm.print();
            tm.movePlayer(p2);
            tm.print();
        }

        System.out.println("finish");
    }
}
