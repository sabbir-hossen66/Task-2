import React from 'react';
import bannerOne from '../../assets/banner1.jpg'
import bannerTwo from '../../assets/banner2.jpg'
import bannerThree from '../../assets/banner3.jpg'


const Banner = () => {
  return (
    <div className='container mx-auto px-4 pt-8'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>

        {/* Left Side */}
        <div className='text-center md:text-left mb-8 md:mb-0'>
          <h4 className='text-md font-bold text-white uppercase mb-3'>
            Created by Envato Creative Heroes
          </h4>
          <h2 className='text-4xl md:text-6xl font-bold uppercase text-white leading-tight'>
            Web Agency
            <br />
            WordPress Theme
          </h2>
        </div>

        {/* Right Side (Images) */}
        <div className='flex flex-col items-center p-4'>
          <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 items-center mb-6'>
            {/* Left Image with Tilt */}
            <img
              className='h-48 w-64 md:h-64 md:w-80 transform rotate-[-15deg] rounded-lg transition-transform duration-700 hover:rotate-0 hover:scale-105'
              src={bannerOne}
              alt="Banner 1"
            />

            {/* Right Image with Tilt */}
            <img
              className='h-48 w-64 md:h-64 md:w-80 transform rotate-[15deg] rounded-lg transition-transform duration-700 hover:rotate-0 hover:scale-105'
              src={bannerTwo}
              alt="Banner 2"
            />
          </div>

          {/* Third Image Centered Below */}
          <div className='flex justify-center'>
            <img
              className='h-40 w-56 md:h-56 md:w-72 rounded-lg'
              src={bannerThree}
              alt="Banner 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;