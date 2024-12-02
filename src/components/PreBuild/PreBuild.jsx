import React from 'react';

const PreBuild = () => {
  return (
    <div>
      <div className="bg-indigo-500 pt-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between px-4 text-center text-white">
          {/* Text Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Build With Incredible
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Pre-Built Inner Pages Ready
            </h3>
          </div>

          {/* 25+ Section */}
          <div className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-extralight mb-4">
            <span>25+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBuild;
