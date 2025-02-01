import React, { useEffect, useRef } from "react";

const MytyCanvas = () => {
  const canvasRef = useRef(null);

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
      ctx.font = "80px 'Poppins', sans-serif";
      ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("myty", x, y);
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

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      x = canvas.width / 2;
      y = canvas.height / 2;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen bg-black"></canvas>;
};

export default MytyCanvas;
