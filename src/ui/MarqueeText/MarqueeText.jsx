import React from 'react';

const MarqueeText = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        <h1 className="text-gradient-to-r from-blue-500 to-indigo-600 text-white text-8xl uppercase font-bold text-center py-20">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default MarqueeText;