import React from "react";
import { motion } from "framer-motion";

const MediaBotLogo = ({ size = 150 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Animated Gradient */}
      <defs>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <motion.stop
            offset="0%"
            stopColor="#4f46e5"
            animate={{ stopColor: ["#4f46e5", "#9333ea", "#22d3ee", "#4f46e5"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
          <motion.stop
            offset="100%"
            stopColor="#9333ea"
            animate={{ stopColor: ["#9333ea", "#22d3ee", "#4f46e5", "#9333ea"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        </linearGradient>
      </defs>

      {/* Bot Head Outline */}
      <motion.path
        d="M50 80 C30 100, 30 140, 50 160 C70 180, 130 180, 150 160 C170 140, 170 100, 150 80 C130 60, 70 60, 50 80 Z"
        stroke="url(#glowGradient)"
        strokeWidth="6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Eyes */}
      <motion.circle cx="80" cy="110" r="5" fill="white" />
      <motion.circle cx="120" cy="110" r="5" fill="white" />

      {/* Signal Waves */}
      <motion.path
        d="M40 60 Q100 10, 160 60"
        stroke="url(#glowGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      <motion.path
        d="M50 50 Q100 0, 150 50"
        stroke="url(#glowGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default MediaBotLogo;
