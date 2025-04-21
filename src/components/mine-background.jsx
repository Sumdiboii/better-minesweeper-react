import React, { useRef, useEffect } from 'react';

const ParallaxMountains = () => {
  const canvasRef = useRef(null);
  const mountainRanges = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 10, y: window.innerHeight });
  let dt = 1;

  class Mountain {
    constructor({ layer, x, y, width, height, color }) {
      this.reset({ layer, x, y, width, height, color });
    }

    reset({ layer, x, y, width, height, color }) {
      this.layer = layer;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
  }

  class MountainRange {
    constructor({ layer, width, height, speed, baseColor }) {
      this.x = 0;
      this.layer = layer;
      this.width = { min: width.min, max: width.max };
      this.height = { min: height.min, max: height.max };
      this.speed = speed;
      this.baseColor = baseColor; // Store the base color for this layer
      this.mountains = [];
      this.populate();
    }

    // Dynamically adjust color based on the layer and use the base color
    getColor() {
      const shadeFactor = this.layer * 15; // Change the factor for more or less contrast
      const hsl = this.baseColor;
      const adjustedColor = `hsl(${hsl.h}, ${hsl.s}%, ${Math.max(hsl.l - shadeFactor, 10)}%)`;
      return adjustedColor;
    }

    populate() {
      const canvas = canvasRef.current;
      let totalWidth = 0;
      while (totalWidth <= canvas.width + this.width.max * 4) {
        const newWidth = Math.round(random(this.width.min, this.width.max));
        const newHeight = Math.round(random(this.height.min, this.height.max));
        const last = this.mountains[this.mountains.length - 1];
        const x = last ? last.x + last.width : 0;
        const y = canvas.height - newHeight;
        this.mountains.push(new Mountain({
          layer: this.layer,
          x,
          y,
          width: newWidth,
          height: newHeight,
          color: this.getColor() // Apply the dynamically generated color for each mountain
        }));
        totalWidth += newWidth;
      }
    }

    update() {
      this.x -= mouse.current.x * this.speed * dt;
      const canvas = canvasRef.current;
      const first = this.mountains[0];

      if (first.width + first.x + this.x < -this.width.max) {
        const newWidth = Math.round(random(this.width.min, this.width.max));
        const newHeight = Math.round(random(this.height.min, this.height.max));
        const last = this.mountains[this.mountains.length - 1];
        first.reset({
          layer: this.layer,
          x: last.x + last.width,
          y: canvas.height - newHeight,
          width: newWidth,
          height: newHeight,
          color: this.getColor() // Reapply the dynamically generated color when resetting mountains
        });
        this.mountains.push(this.mountains.shift());
      }
    }

    render(ctx) {
      const canvas = canvasRef.current;
      ctx.save();
      ctx.translate(this.x, ((canvas.height - mouse.current.y) / 20) * this.layer);
      ctx.beginPath();
      const points = this.mountains;
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const c = (points[i].x + points[i + 1].x) / 2;
        const d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
      }
      ctx.lineTo(canvas.width - this.x, canvas.height);
      ctx.lineTo(0 - this.x, canvas.height);
      ctx.closePath();
      ctx.fillStyle = this.getColor();  // Set the fill to a dynamically generated color
      ctx.fill();
      ctx.restore();
    }
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Define the base color for each layer with lighter tones for closer mountains
    const baseColors = [
      { h: 200, s: 90, l: 80 },   // Lighter blue for the closest layers (more lightness)
      { h: 210, s: 80, l: 70 },   // Slightly lighter tone for the second layer
      { h: 220, s: 70, l: 60 },
      { h: 230, s: 60, l: 50 },
      { h: 240, s: 50, l: 30 }    // Darker purple for the farthest layers
    ];
  
    for (let i = 5; i > 0; i--) {
      mountainRanges.current.push(
        new MountainRange({
          layer: i,
          width: { min: i * 50, max: i * 70 },
          height: { min: 200 - (i - 1) * 40, max: 300 - (i - 1) * 40 },
          speed: i * 0.003,
          baseColor: baseColors[5 - i] // Assign the color to each range based on the new color gradient
        })
      );
    }
  
    const handleMouseMove = (e) => {
      mouse.current.x = e.pageX;
      mouse.current.y = e.pageY;
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    let lastTime = performance.now();
    const animate = (time) => {
      const delta = (time - lastTime) / 16;
      dt = Math.min(Math.max(delta, 0.1), 5);
      lastTime = time;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = mountainRanges.current.length - 1; i >= 0; i--) {
        mountainRanges.current[i].update();
        mountainRanges.current[i].render(ctx);
      }
  
      requestAnimationFrame(animate);
    };
  
    animate(lastTime);
  
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default ParallaxMountains;
