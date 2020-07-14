package io.advantageous.ddp.world;

//import javafx.util.Pair;
import java.util.*;
import java.util.Random;

public class Player extends Thread {
    public String id;
    private Pair<Integer, Integer> location;
    //private List<Pair<Integer,Integer>> volume = new ArrayList<Pair<Integer,Integer>>();
    private double size;
    private double num_cells;
    private double ATP;
    private double num_mito;
    private Random r = new Random();
    private String action;

    Player(String id, Pair xy) {
        this.id = id;
        //this.setName(id);
        this.action = "";
        this.location = xy;
        this.size = 1;
        this.num_cells = 1;
        this.ATP = 1500;
        this.num_mito = 1;
        //System.out.println(this.toString());
        System.out.println("Thread - MADE "+ this.id + ", now stalling...");
        try {
            //this.start();
            //Thread.sleep(1);
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void respire () {
        try {
            Thread.sleep(10);
            
        } catch (InterruptedException e) {
        System.out.println("Thread " +  id + " interrupted.");
     }
    }

    /*
    public void grow(int n){
        Integer x = this.location.getKey();
        Integer y = this.location.getValue();

        for (int i = 0; i < n; i++) {

            Pair<Integer, Integer> new_xy = new Pair<>(x + i, y);
            this.volume.add(new_xy);

            new_xy = new Pair<>(x - i, y);
            this.volume.add(new_xy);

            new_xy = new Pair<>(x, y + 1);
            this.volume.add(new_xy);

            new_xy = new Pair<>(x, y - 1);
            this.volume.add(new_xy);
        }
    }
    */

    public void grow () {
        int n = r.nextInt(20) + 1;
        double inc = 9.0/n;
        System.out.println(this.id + " inc is " + inc);
        try {

        do {
            this.size += inc;
            System.out.println(this.id +" grew to " + size);
            Thread.sleep(500);//
            } while (this.size < 10);
        } catch (InterruptedException e) {
        System.out.println("Thread " +  id + " interrupted.");
        }
    }

    public void count() {
        try {
           for(int i = 4; i > 0; i--) {
              System.out.println("Thread: " + id + ", countdown " + i);
              // Let the thread sleep for a while.
              Thread.sleep(1000);
           }
        } catch (InterruptedException e) {
           System.out.println("Thread " +  id + " interrupted.");
        }
    }

    //players alternatingly run when only the run function is overridden
    @Override
    public void run() {
        System.out.println("Running " + id);

        try {
            switch(action) {
                case "grow": this.grow();
                break;
                default: this.count();
                break;
            }
            Thread.sleep(1000);
        } catch (InterruptedException e) {
           System.out.println("Thread " +  id + " interrupted.");
        }
        System.out.println("Thread " +  id + " exiting.");
     }

     /*
    public void start(){
        System.out.println("Starting " + id);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
           System.out.println("Thread " +  id + " interrupted.");
        }
        System.out.println("Thread " +  id + " exiting.");
    }
    */

    /*
    @Override
    public void start(){
        System.out.println("Starting " + id);
        try {
            switch(action) {
                case "grow": this.grow();
                break;
                default: this.run();
                break;
            }
            Thread.sleep(1000);
        } catch (InterruptedException e) {
           System.out.println("Thread " +  id + " interrupted.");
        }
        System.out.println("Thread " +  id + " exiting.");
    }
    */
     

    //cannot override the thread class's move because that is a void function, so this is called runMove
    //tileMap calls this function to move
    //stalls for 2000 milliseconds
    public Pair<Integer,Integer> runMove() {
        Pair<Integer,Integer> p = null;
        System.out.println("Thread - START "+ this.id + ", now stalling...");
        try {
            Thread.sleep(2000);
            p = this.move();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Thread - END "+ this.id);
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

    public double getSize(){
        return this.size;
    }

    public double getNumCells() {
        return this.num_cells;
    }

    public double getATP() {
        return this.ATP;
    }

    public double getNumMito() {
        return this.num_mito;
    }

    public void setAction(String action) {
        this.action = action;
    }
}

