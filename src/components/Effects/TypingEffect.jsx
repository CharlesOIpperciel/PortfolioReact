import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
        setIsBlinking(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayedText}
      <span className={`blinking-cursor ${isBlinking ? 'visible' : ''}`}>|</span>
    </span>
  );
};

export default TypingEffect;