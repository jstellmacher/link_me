// components/TreeIcons.js
import { FaTree } from 'react-icons/fa';

const numTreesPerQuadrant = 4;

// Generate tree positions for each quadrant
const generateQuadrantPositions = (quadrant) => {
  const positions = [];
  for (let i = 0; i < numTreesPerQuadrant; i++) {
    const x = Math.floor(Math.random() * 40) + (quadrant % 2) * 50;
    const y = Math.floor(Math.random() * 40) + Math.floor(quadrant / 2) * 50;
    positions.push({ top: `${y}%`, left: `${x}%` });
  }
  return positions;
};

// Combine all quadrant positions
const treeIcons = [
  ...generateQuadrantPositions(0),
  ...generateQuadrantPositions(1),
  ...generateQuadrantPositions(2),
  ...generateQuadrantPositions(3),
];

const iconStyle = "absolute z-0 opacity-20 animate-fade";

export default function TreeIcons() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {treeIcons.map((style, index) => (
        <FaTree
          key={index}
          className={iconStyle}
          style={{
            top: style.top,
            left: style.left,
            width: '80px',
            height: '80px',
            position: 'absolute',
            opacity: Math.random() * 0.5 + 0.2,
            transform: `scale(${Math.random() * 0.5 + 0.75})`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
