
import React from 'react';

interface JonesLogoProps {
  className?: string;
  size?: string; // e.g., 'text-2xl' or '1.5rem'
}

const JonesLogo: React.FC<JonesLogoProps> = ({ className = '', size = 'text-3xl' }) => {
  // Brand Colors from User Image
  const teal = '#22B2C1';
  const yellow = '#FFCE44';

  return (
    <div 
      className={`inline-flex items-center font-black select-none leading-none ${size} ${className}`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <span className="tracking-[-0.05em]" style={{ color: teal }}>J</span>
      <span className="tracking-[-0.05em]" style={{ color: yellow }}>O</span>
      <div 
        className="mx-[0.05em] translate-y-[-5%] rounded-[4px]"
        style={{
          width: 0,
          height: 0,
          borderTop: '0.35em solid transparent',
          borderBottom: '0.35em solid transparent',
          borderRight: `0.55em solid ${yellow}`
        }}
      />
      <span className="tracking-[-0.05em]" style={{ color: teal }}>E</span>
      <span className="tracking-[-0.05em]" style={{ color: teal }}>S</span>
      <div 
        className="w-[0.15em] h-[0.15em] ml-[0.05em] mb-[0.15em] self-end rounded-[20%]"
        style={{ backgroundColor: yellow }}
      />
    </div>
  );
};

export default JonesLogo;