import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setOffset({ x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <div
    style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'red',
        pointerEvents: 'none',
      }}
    />
  );
};

export default MouseFollower;