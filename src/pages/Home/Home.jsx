import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className='bg-indigo-500 w-full vh-screen  pt-20'>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;