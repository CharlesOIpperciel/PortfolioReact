import React, { useState, useEffect, useRef } from 'react';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.1,
        y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.1,
      }));
      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);
    
    return () => cancelAnimationFrame(animationRef.current);
  }, [targetPosition]);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default MouseFollower;
