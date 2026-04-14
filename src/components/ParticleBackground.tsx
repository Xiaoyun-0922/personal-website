'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 80;
    
    // Resize handling
    const resizeObject = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    
    canvas.width = resizeObject.width;
    canvas.height = resizeObject.height;

    // Mouse object for interactivity
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    const handleMouseMove = (event: MouseEvent) => {
      // Get bounding rect to adjust mouse pos relative to canvas if needed,
      // but assuming canvas is full screen
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    const handleMouseOut = () => {
       mouse.x = null;
       mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const handleResize = () => {
      resizeObject.width = window.innerWidth;
      resizeObject.height = window.innerHeight;
      canvas.width = resizeObject.width;
      canvas.height = resizeObject.height;
      init();
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Draw particle
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Check particle position, move it, and react to mouse
      update() {
        // Bounce off edges
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Collision detection with mouse (interactive push effect)
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
              if (mouse.x < this.x && this.x < canvas!.width - this.size * 10) {
                this.x += 2;
              }
              if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 2;
              }
              if (mouse.y < this.y && this.y < canvas!.height - this.size * 10) {
                this.y += 2;
              }
              if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 2;
              }
            }
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((canvas!.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas!.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        // The color is matched to the accent theme
        let color = 'rgba(74, 144, 226, 0.6)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Check connections
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = 
             ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
             ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
             
          if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
             opacityValue = 1 - (distance / 20000);
             if (!ctx) return;
             // Color matches the accent, fading out over distance
             ctx.strokeStyle = `rgba(74, 144, 226, ${opacityValue * 0.4})`;
             ctx.lineWidth = 1;
             ctx.beginPath();
             ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
             ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
             ctx.stroke();
          }
        }
      }
    }

    let animationFrameId: number;
    
    // Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', // Let clicks pass through to underneath buttons
        opacity: 0.8
      }} 
    />
  );
}
