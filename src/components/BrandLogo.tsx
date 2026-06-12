import React from "react";

// SVG Dotted Crescent Icon Component (Primary colored logo)
export const DottedCrescent = ({ className = "w-16 h-16" }: { className?: string }) => {
  const dots = [
    // Outer arc (Vivid Blue)
    { cx: 20, cy: 50, r: 4.5, color: '#006DDA' },
    { cx: 21, cy: 42, r: 4.2, color: '#006DDA' },
    { cx: 21, cy: 58, r: 4.2, color: '#006DDA' },
    { cx: 24, cy: 34, r: 3.8, color: '#006DDA' },
    { cx: 24, cy: 66, r: 3.8, color: '#006DDA' },
    { cx: 29, cy: 27, r: 3.5, color: '#006DDA' },
    { cx: 29, cy: 73, r: 3.5, color: '#006DDA' },
    { cx: 36, cy: 22, r: 3.0, color: '#1d4ed8' },
    { cx: 36, cy: 78, r: 3.0, color: '#1d4ed8' },
    { cx: 44, cy: 19, r: 2.6, color: '#1e40af' },
    { cx: 44, cy: 81, r: 2.6, color: '#1e40af' },
    { cx: 53, cy: 18, r: 2.2, color: '#1e40af' },
    { cx: 53, cy: 82, r: 2.2, color: '#1e40af' },

    // Mid arc (Sky Blue / Cyan)
    { cx: 28, cy: 50, r: 3.5, color: '#0ea5e9' },
    { cx: 29, cy: 43, r: 3.2, color: '#0ea5e9' },
    { cx: 29, cy: 57, r: 3.2, color: '#0ea5e9' },
    { cx: 32, cy: 36, r: 2.9, color: '#0ea5e9' },
    { cx: 32, cy: 64, r: 2.9, color: '#0ea5e9' },
    { cx: 37, cy: 30, r: 2.6, color: '#38bdf8' },
    { cx: 37, cy: 70, r: 2.6, color: '#38bdf8' },
    { cx: 43, cy: 26, r: 2.3, color: '#38bdf8' },
    { cx: 43, cy: 74, r: 2.3, color: '#38bdf8' },
    { cx: 50, cy: 24, r: 2.0, color: '#7dd3fc' },
    { cx: 50, cy: 76, r: 2.0, color: '#7dd3fc' },

    // Inner arc (Light blue / White highlights)
    { cx: 35, cy: 50, r: 2.5, color: '#38bdf8' },
    { cx: 36, cy: 44, r: 2.3, color: '#38bdf8' },
    { cx: 36, cy: 56, r: 2.3, color: '#38bdf8' },
    { cx: 39, cy: 38, r: 2.0, color: '#7dd3fc' },
    { cx: 39, cy: 62, r: 2.0, color: '#7dd3fc' },
    { cx: 43, cy: 34, r: 1.7, color: '#e0f2fe' },
    { cx: 43, cy: 66, r: 1.7, color: '#e0f2fe' },
    { cx: 49, cy: 32, r: 1.4, color: '#ffffff' },
    { cx: 49, cy: 68, r: 1.4, color: '#ffffff' },
    { cx: 55, cy: 31, r: 1.1, color: '#ffffff' },
    { cx: 55, cy: 69, r: 1.1, color: '#ffffff' }
  ];

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {dots.map((dot, idx) => (
        <circle 
          key={idx} 
          cx={dot.cx} 
          cy={dot.cy} 
          r={dot.r} 
          fill={dot.color} 
        />
      ))}
    </svg>
  );
};

// SVG Dotted Crescent White Icon Component (Monochrome/B&W)
export const DottedCrescentWhite = ({ className = "w-16 h-16", color = "#FFFFFF" }: { className?: string; color?: string }) => {
  const dots = [
    { cx: 20, cy: 50, r: 4.5 }, { cx: 21, cy: 42, r: 4.2 }, { cx: 21, cy: 58, r: 4.2 },
    { cx: 24, cy: 34, r: 3.8 }, { cx: 24, cy: 66, r: 3.8 }, { cx: 29, cy: 27, r: 3.5 },
    { cx: 29, cy: 73, r: 3.5 }, { cx: 36, cy: 22, r: 3.0 }, { cx: 36, cy: 78, r: 3.0 },
    { cx: 44, cy: 19, r: 2.6 }, { cx: 44, cy: 81, r: 2.6 }, { cx: 53, cy: 18, r: 2.2 },
    { cx: 53, cy: 82, r: 2.2 }, { cx: 28, cy: 50, r: 3.5 }, { cx: 29, cy: 43, r: 3.2 },
    { cx: 29, cy: 57, r: 3.2 }, { cx: 32, cy: 36, r: 2.9 }, { cx: 32, cy: 64, r: 2.9 },
    { cx: 37, cy: 30, r: 2.6 }, { cx: 37, cy: 70, r: 2.6 }, { cx: 43, cy: 26, r: 2.3 },
    { cx: 43, cy: 74, r: 2.3 }, { cx: 50, cy: 24, r: 2.0 }, { cx: 50, cy: 76, r: 2.0 },
    { cx: 35, cy: 50, r: 2.5 }, { cx: 36, cy: 44, r: 2.3 }, { cx: 36, cy: 56, r: 2.3 },
    { cx: 39, cy: 38, r: 2.0 }, { cx: 39, cy: 62, r: 2.0 }, { cx: 43, cy: 34, r: 1.7 },
    { cx: 43, cy: 66, r: 1.7 }, { cx: 49, cy: 32, r: 1.4 }, { cx: 49, cy: 68, r: 1.4 },
    { cx: 55, cy: 31, r: 1.1 }, { cx: 55, cy: 69, r: 1.1 }
  ];

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {dots.map((dot, idx) => (
        <circle 
          key={idx} 
          cx={dot.cx} 
          cy={dot.cy} 
          r={dot.r} 
          fill={color} 
        />
      ))}
    </svg>
  );
};
