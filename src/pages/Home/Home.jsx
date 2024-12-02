import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';

const Home = () => {
  return (
    <div className='bg-indigo-500 min-h-screen w-full flex flex-col'>
      <Navbar />
      <Banner />
      <Features />
    </div>
  );
};

export default Home;