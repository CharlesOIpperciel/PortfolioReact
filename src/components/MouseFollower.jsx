import React, { useEffect, useRef } from 'react';
import "../styles/tailwind.css"

function MouseFollower() {
  const followerRef = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationId;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      
      if (!isVisible.current) {
        isVisible.current = true;
        follower.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      follower.style.opacity = '0';
    };

    const animate = () => {
      // Smooth easing
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      // Use transform instead of changing position
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="mouse-follower"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 9999,
      }}
    />
  );
}

export default MouseFollower;
