package output;

import java.util.HashMap;
import java.util.Hashtable;
import javafx.util.Pair;
import java.util.Iterator;
import java.util.List;
import java.util.LinkedList;

public class TileMap<K, V> extends Hashtable<K, V> {
    int height;
    int width;
    K key;
    V value;
    List l =  new LinkedList();

    /** Sets the world size
     * @param height the max height (y coord)
     * @param width the mac width (x coord)
     */
    public void set(int height, int width) {
        this.height = height;
        this.width = width;
        this.generate();
    }

    /**
     * generates a new world map with empty tiles
     */
    public void generate(){
        for(int i = 0; i < this.height; i++) {
            for (int j = 0; j < this.width; j++) {
                K k = (K) new Pair(i,j);
                V v = (V) new Tile();
                this.put(k,v);
            }
        }
    }

    /**
     * Places a player on the map
     * @param p the player
     * @param xy the coordinates in a Pair
     */
    public void addPlayer(Player p, Pair xy){
        //TODO: check for players already there
        Tile t = (Tile) this.get(xy);
        t.setPlayer(p);
        p.setLocation(xy);
    }

    /**
     * moves a player based on the player's move functionality
     * @param p the player to move
     * @return the coordinates the player moves to
     */
    public Pair<Integer, Integer> movePlayer(Player p){
        Pair<Integer, Integer> xy = p.getLocation();
        Pair<Integer, Integer> xy1 = p.runMove();

        //redo if move is out of bounds
        int x_coord = (int) xy1.getKey();
        int y_coord = (int) xy1.getValue();
        if(x_coord < 0 || x_coord == this.width || y_coord < 0 || y_coord == this.height){
            xy1 = this.movePlayer(p);
        }


        Tile t = (Tile) this.get(xy);
        t.removePlayer();
        this.addPlayer(p,xy1);
        return xy1;
    }
    /**
     * Prints to screen a visual representation of the world
     * (0,0) is bottom left
     */
    public void print(){
        for(int j = height - 1; j > -1 ; j--) {
            for (int i = 0; i < width; i++) {
                Pair<Integer, Integer> p = new Pair<>(i,j);
                System.out.print(this.get(p).toString());
            }
            System.out.print('\n');
        }
        System.out.print('\n');
    }
}
