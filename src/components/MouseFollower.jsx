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
    let isAnimating = false;

    const handleMouseMove = (event) => {
      const now = Date.now();
      // Throttle mouse move events to reduce performance impact
      if (now - lastMouseMove.current < 16) return; // ~60fps
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

      // Smooth easing with reduced precision for better performance
      const dx = mouseX - followerX;
      const dy = mouseY - followerY;
      
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        
        // Use transform3d for hardware acceleration
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners with passive option for better performance
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
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 9999,
        willChange: 'transform',
      }}
    />
  );
}

export default MouseFollower;
