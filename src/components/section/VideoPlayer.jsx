import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        className={styles.video}
        url="https://www.youtube.com/embed/4fhl9F8DZDU?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
        playing={true} 
        loop={true} 
        controls={true} 
        muted={true} 
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
