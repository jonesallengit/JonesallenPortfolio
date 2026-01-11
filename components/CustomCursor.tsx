
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC<{ color?: string }> = ({ color = '#3b82f6' }) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.classList.contains('clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="cursor-dot shadow-lg" 
        style={{ color: isHovering ? 'white' : color, background: isHovering ? 'white' : color }}
      />
      <div 
        ref={outlineRef} 
        className="cursor-outline" 
        style={{ 
          color: color, 
          borderColor: color,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? '0.2' : '0.5',
          background: isHovering ? color : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
