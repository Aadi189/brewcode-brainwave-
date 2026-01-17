import React, { useState, useEffect } from 'react';

export default function FlippingWord() {
  const words = ['hype.', 'noise.', 'scams.', 'trap.'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`bg-[#D4F34F] text-black px-4 py-0.5 rounded-md inline-block font-bold transition-all duration-300 ${
        isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}
    >
      {words[currentIndex]}
    </span>
  );
}