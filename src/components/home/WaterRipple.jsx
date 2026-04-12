import React, { useEffect, useRef } from 'react';

const WaterRipple = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let ripples = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const addRipple = (x, y) => {
      ripples.push({
        x,
        y,
        r: 0,
        opacity: 0.5,
        maxRadius: 100 + Math.random() * 100
      });
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.r += 2;
        ripple.opacity -= 0.005;

        if (ripple.opacity <= 0 || ripple.r >= ripple.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(21, 93, 252, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.r * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(21, 93, 252, ${ripple.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestAnimationFrame(update);
    };

    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) { // Throttle ripple creation
        addRipple(e.clientX, e.clientY);
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    update();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};

export default WaterRipple;
