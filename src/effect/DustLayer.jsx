import React, { useMemo } from "react";

const DustLayer = ({ count = 120, zIndex = 1 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      size: Math.random() * 1.2 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, [count]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default DustLayer;