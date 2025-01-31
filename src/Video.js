import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Default styles
import "@videojs/themes/dist/city/index.css"; // Optional theme

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Video.js Player
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options, () => {
        console.log("Video.js player is ready!");
      });
    }

    // Cleanup on component unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [options]);

  return (
    <div className="video-player-container max-w-3xl mx-auto mt-8">
      <div
        className="video-js vjs-theme-city"
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          controls
          preload="auto"
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
