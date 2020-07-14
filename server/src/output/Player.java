package output;

import javafx.util.Pair;
import java.util.Random;

public class Player extends Thread {
    String id;
    private Pair<Integer, Integer> location;
    private Random r = new Random();

    Player(String id, Pair xy) {
        this.id = id;
        this.setName(id);
        this.location = xy;
        //System.out.println(this.toString());
        System.out.println("Thread - MADE "+ this.getName() + ", now stalling...");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    //cannot override the thread class's move because that is a void function, so this is called runMove
    //tileMap calls this function to move
    //stalls for 2000 milliseconds
    public Pair<Integer,Integer> runMove() {
        Pair<Integer,Integer> p = null;
        System.out.println("Thread - START "+ this.getName() + ", now stalling...");
        try {
            Thread.sleep(2000);
            p = this.move();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Thread - END "+ this.getName());
        return p;
    }
    /**
     * randomly finds an adjacent tile the player can move to
     * (error checking occurs in wrapper functions)
     * @return the coordinates to move to
     */
    public Pair<Integer,Integer> move(){
        this.toString();
        int direction = r.nextInt(4);
        Pair<Integer,Integer> xy1 = null;
        switch(direction){
            case(0):
                xy1 = this.moveup();
                break;
            case(1):
                xy1 = this.movedown();
                break;
            case(2):
                xy1= this.moveright();
                break;
            case(3):
                xy1 = this.moveleft();
                break;
        }
        return xy1;
    }

    public Pair<Integer,Integer> moveup(){
        Integer y = this.location.getValue();
        y++;
        Pair<Integer,Integer> xy1 = new Pair<Integer,Integer>(location.getKey(),y);
        System.out.println(this.id + " is moving up");//
        return xy1;
    }

    public Pair<Integer,Integer> movedown(){
        Integer y = this.location.getValue();
        y--;
        Pair<Integer,Integer> xy1 = new Pair<Integer,Integer>(location.getKey(),y);
        System.out.println(this.id + " is moving down");//
        return xy1;
    }

    public Pair<Integer,Integer> moveright(){
        Integer x = this.location.getKey();
        x++;
        Pair<Integer,Integer> xy1 = new Pair<Integer,Integer>(x, location.getValue());
        System.out.println(this.id + " is moving right");//
        return xy1;
    }

    public Pair<Integer,Integer> moveleft(){
        Integer x = this.location.getKey();
        x--;
        Pair<Integer,Integer> xy1 = new Pair<Integer,Integer>(x, location.getValue());
        System.out.println(this.id + " is moving left");//
        return xy1;
    }

    public Pair<Integer, Integer> getLocation() {
        return this.location;
    }

    public void setLocation(Pair<Integer,Integer> xy){
        this.location = xy;
    }
}

