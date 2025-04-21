import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './minesweeper-title.css';

const AnimatedImage = () => {
  const [imageDone, setImageDone] = useState(false); // Track image animation completion

  useEffect(() => {
    if (imageDone) {
      // You can trigger other actions here
    }
  }, [imageDone]);

  return (
    <div className="flex-container">
      {/* Left Pane with Plane */}
      <motion.img
  src="/assets/jet.png"
  alt="Plane"
  className="plane-image"
  initial={{ x: 0, y: 0 }}
  animate={
    imageDone
      ? { x: '100vw' } // Exit right
      : {
          y: [0, -5, 0, 5, 0], // Floating effect
        }
  }
  transition={
    imageDone
      ? {
          duration: 2,
          ease: 'easeInOut',
        }
      : {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }
  }
/>


      {/* Right Pane with Collapsing Title */}
      <motion.div
        className="right-pane"
        initial={{ width: '60vw' }}
        animate={{
          width: imageDone ? 0 : '60vw',
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="animated-image-wrapper"
          initial={{ opacity: 0, transform: 'translateY(-600px)' }}
          animate={{
            transform: ['translateY(-600px)', 'translateY(-10px)', 'translateY(-10px)', 'translateY(-600px)'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 0.8, 1],
            ease: 'easeInOut',
            onComplete: () => setImageDone(true),
          }}
        >
          <img
            src="/assets/title.png"
            alt="Animated"
            className="animated-image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
