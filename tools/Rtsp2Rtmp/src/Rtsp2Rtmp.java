/**
 * Author: Archer Reilly
 * Date: 13/Apr/2015
 * File: Rtsp2Rtmp.java
 * Desc: the main file for project
 * 
 * Produced By Ebang
 */
public class Rtsp2Rtmp {
  public static void main(String[] args) {
    String rtspUrl1 = "rtsp://192.168.10.97:554/AmbaStreamTest";
    String rtmpUrl1 = "127.0.0.1:1935/live/camera";
//    String rtspUrl2 = "rtsp://192.168.10.110:1234";
//    String rtmpUrl2 = "127.0.0.1:1935/live/what";
    
    // Create tasks
    Runnable task1 = new Rtsp2RtmpTask(rtspUrl1, rtmpUrl1);
//    Runnable task2 = new Rtsp2RtmpTask(rtspUrl2, rtmpUrl2);
    
    // Create threads
    Thread thread1 = new Thread(task1);
//    Thread thread2 = new Thread(task2);
    
    // Start threads
    thread1.start();
//    thread2.start();
    
    if (thread1.isAlive()) {
      System.out.println("INFO: thread1 is alive");
    } else {
      System.out.println("INFO: thread1 is not alive");
    }
  }
}
