import React from 'react';

const ResponsiveTheme = () => {
  return (
    <section className="bg-indigo -600 text-white py-16 text-center">
      <h1 className="text-3xl font-bold mb-8 animate-fadeIn">
        Responsive & Retina Ready Theme
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Desktop */}
        <div className="device w-48 text-center animate-slideUp">
          <ion-icon name="tv" class='text-6xl' ></ion-icon>
          <p className="text-sm">1025px Desktop Screen Layout</p>
        </div>
        {/* Laptop */}
        <div className="device w-48 text-center animate-slideUp">
          <ion-icon name="laptop" class='text-6xl'></ion-icon>
          <p className="text-sm">769px Laptop Screen Layout</p>
        </div>
        {/* Tablet */}
        <div className="device w-48 text-center animate-slideUp">
          <ion-icon name="tablet-protrait" class='text-6xl'></ion-icon>
          <p className="text-sm">481px Tablet Screen Layout</p>
        </div>
      </div>
      <img className='w-2/6 mx-auto rounded mt-4' src="https://i.ibb.co.com/d62S3Kk/computer.png" alt="" />
    </section>
  );
};

export default ResponsiveTheme;