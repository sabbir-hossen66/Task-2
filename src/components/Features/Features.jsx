import React from 'react';
import Title from '../../ui/Title/Title';
import Cards from '../../ui/Cards/Cards';
import MarqueeText from '../../ui/MarqueeText/MarqueeText';

const Features = () => {
  return (
    <div className='lg:-mt-9'>
      <Title subtitle={'Build With Incredible'} title={'Incredible Unique Features'} />
      <Cards />
      <MarqueeText text="At our agency, we believe in the transformative power of creativity and innovation, seamlessly blending strategy, design, and technology to bring your vision to life." />
    </div>
  );
};

export default Features;