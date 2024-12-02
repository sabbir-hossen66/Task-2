import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import Projects from '../../components/Projects/Projects';
import PreBuild from '../../components/PreBuild/PreBuild';
import Footer from '../../shared/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Pricing from '../../components/Pricing/Pricing';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='bg-indigo-500 min-h-screen w-full flex flex-col font-sans'>
      <Navbar />
      <Banner />
      <Features />
      <Projects />
      <PreBuild />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;