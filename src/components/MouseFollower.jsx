import React, { useEffect, useRef } from 'react';
import "../styles/tailwind.css"

function MouseFollower() {
  const followerRef = useRef(null);
  const isVisible = useRef(false);
  const lastMouseMove = useRef(0);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationId;

    const handleMouseMove = (event) => {
      const now = Date.now();
      // Throttle to 30fps for better performance
      if (now - lastMouseMove.current < 33) return;
      lastMouseMove.current = now;

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
      if (!isVisible.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      // Simplified easing with better performance
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;
      
      // Only update if movement is significant
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        
        // Use transform3d for hardware acceleration
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners with passive option
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.2s ease',
        zIndex: 9999,
        willChange: 'transform',
        background: '#00ff88',
        boxShadow: '0 0 12px rgba(0, 255, 136, 0.6)',
      }}
    />
  );
}

export default MouseFollower;
