// components/BackgroundShapes.tsx

import React from 'react';

const BackgroundShapes: React.FC = () => {
  return (
    <>
      {/* Top Left - Large Red/Orange Triangle Group */}
      <div className="fixed top-0 left-0 z-0 opacity-90">
        <div className="relative">
          {/* Red triangle */}
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[250px] border-t-transparent border-l-[250px] border-l-[#dc2626] border-b-[250px] border-b-transparent"></div>
          {/* Pink overlay */}
          <div className="absolute top-0 left-20 w-0 h-0 border-t-[200px] border-t-transparent border-l-[200px] border-l-[#f43f5e] border-b-[200px] border-b-transparent"></div>
          {/* Orange triangle */}
          <div className="absolute top-0 left-32 w-0 h-0 border-t-[180px] border-t-transparent border-l-[180px] border-l-[#f97316] border-b-[180px] border-b-transparent"></div>
          {/* Yellow triangle */}
          <div className="absolute top-10 left-48 w-0 h-0 border-t-[100px] border-t-transparent border-r-[100px] border-r-[#fbbf24] border-b-[100px] border-b-transparent"></div>
        </div>
      </div>
      
      {/* Bottom Left - Colorful Blocks */}
      <div className="fixed bottom-0 left-0 z-0 opacity-90 flex">
        <div className="w-24 h-40 bg-[#06b6d4]"></div>
        <div className="w-24 h-40 bg-[#2563eb]"></div>
        <div className="w-32 h-40 bg-[#f97316]"></div>
        <div className="w-24 h-40 bg-[#fbbf24]"></div>
      </div>
      
      {/* Top Right - Cyan Triangle */}
      <div className="fixed top-0 right-0 w-0 h-0 border-t-[300px] border-t-transparent border-r-[300px] border-r-[#06b6d4] border-b-[300px] border-b-transparent z-0 opacity-80"></div>
      
      {/* Bottom Right - Cyan/Teal Triangle */}
      <div className="fixed bottom-0 right-0 w-0 h-0 border-b-[250px] border-b-transparent border-r-[250px] border-r-[#14b8a6] border-t-[250px] border-t-transparent z-0 opacity-70"></div>
      
      {/* Middle Left - Small Cyan Triangle */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-t-[120px] border-t-transparent border-l-[120px] border-l-[#06b6d4] border-b-[120px] border-b-transparent z-0 opacity-60"></div>
    </>
  );
};

export default BackgroundShapes;