import React from 'react';
import MarqueeText from '../../ui/MarqueeText/MarqueeText';

const Gallery = () => {
  return (
    <div className="bg-indigo-500 text-white">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold animate-fadeIn">
          Our Services and Features
        </h1>
        <p className="mt-4 text-lg">Professional & Responsive Web Development</p>
      </header>
      <MarqueeText text={'Upcoming Data from Backend'} />
    </div>
  );
};

export default Gallery;