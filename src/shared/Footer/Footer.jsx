import React from 'react';

const Footer = () => {
  return (
    <div className="bg-indigo-600 py-24 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-700 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-16 right-16 w-96 h-96 bg-blue-800 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center text-white relative z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Let’s Start Your Online Business Today!
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-2s">
          One-time payment & get free life-time license and update.
        </p>

        <a
          href="#"
          className="inline-block bg-white text-indigo-600 font-semibold text-lg px-8 py-3 hover:bg-indigo-200 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s"
        >
          Purchase Now <span className="ml-2">→</span>
        </a>
      </div>
      <p className='text-center text-white mt-6'>© 2024 Digital Creative Studio. All rights reserved.</p>
    </div>
  );
};

export default Footer;