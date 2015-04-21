/**
 * Desc: test the class files I wrote.
 * @author archer
 *
 */
public class Main {
  public static void main(String[] args) {
    String ip = "192.168.10.98";
    int port = 554;
    
    CameraState cs = new CameraState(ip, port);
    if (cs.isOnLine()) {
      System.out.println("INFO: on line");
    } else {
      System.out.println("INFO: off line");
    }
  }
}
