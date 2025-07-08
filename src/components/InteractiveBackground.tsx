import { useState } from 'react';

const InteractiveBackground = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 relative overflow-hidden"
      style={{ cursor: 'none' }}
    >
      <div
        className="absolute w-32 h-32 bg-purple-300 rounded-full pointer-events-none mix-blend-screen filter blur-3xl transition-all duration-75"
        style={{
          left: coords.x - 64,
          top: coords.y - 64,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
