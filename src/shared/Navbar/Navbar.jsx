import React from 'react';

import NavLInks from '../../ui/NavLinks/NavLInks';

const Navbar = () => {

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Creatix
        </div>


        <NavLInks />
      </div>

    </div>
  );
};

export default Navbar;