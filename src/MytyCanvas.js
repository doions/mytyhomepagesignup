import React, { useEffect, useRef, useState } from "react";
import fontsData from "./fonts.json";

const MytyCanvas = () => {
  const canvasRef = useRef(null);
  const [currentFont, setCurrentFont] = useState("Poppins");

  useEffect(() => {
    const loadGoogleFont = (font) => {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(
        / /g,
        "+"
      )}:wght@700&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };

    const updateFont = () => {
      const randomFont =
        fontsData.fonts[Math.floor(Math.random() * fontsData.fonts.length)];
      loadGoogleFont(randomFont);
      setCurrentFont(randomFont);
    };

    // Initial font load
    updateFont();

    // Change font every 5 seconds
    const fontInterval = setInterval(updateFont, 5000);

    return () => clearInterval(fontInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 2;
    let dy = 2;
    let hue = 0;

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `80px '${currentFont}', sans-serif`;
      ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("myty.in - a new media platform", x, y);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      x += dx;
      y += dy;

      if (x + 150 > canvas.width || x - 150 < 0) dx = -dx;
      if (y + 50 > canvas.height || y - 50 < 0) dy = -dy;

      hue += 1; // Gradually change color
      drawText();
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      x = canvas.width / 2;
      y = canvas.height / 2;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFont]);

  return <canvas ref={canvasRef} className="w-full h-screen bg-black"></canvas>;
};

export default MytyCanvas;
