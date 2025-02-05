import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import '@videojs/themes/dist/city/index.css';

const initialOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer = ({ options }) => {
  const videoNode = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...options
      }).ready(function() {
        // console.log('onPlayerReady', this);
      });
    }

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js vjs-theme-city" />;
};

export default VideoPlayer;
