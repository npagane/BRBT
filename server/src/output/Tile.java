package output;
import java.util.Random;

public class Tile{

    //object player
    Player player;
    int value; //concentration?

    Tile(){
        Random r = new Random();
        this.value = r.nextInt(10);
    }

    public void setPlayer(Player p) {
        this.player = p;
    }

    public Player getPlayer() {
        return player;
    }

    public void removePlayer() {
        this.player = null;
    }

    @Override
    public String toString() {
        if(player != null){
            return player.id;
        }
        return "" + this.value;
    }
}
