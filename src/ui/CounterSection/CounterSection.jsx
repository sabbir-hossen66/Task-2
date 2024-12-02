import React, { useState, useEffect } from 'react';

const Counter = ({ start, target }) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1; // Increment by 1
      });
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [target]);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-5xl md:text-6xl font-bold text-white'>
        <span>{counter}+</span>
      </div>
    </div>
  );
};

const Number = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8">
      <div className="flex flex-col items-center">
        <Counter start={2} target={50} />
        <p className="text-white text-lg mt-2 font-bold">Client Projects</p>
      </div>

      <div className="flex flex-col items-center">
        <Counter start={7} target={70} />
        <p className="text-white text-lg mt-2 font-bold">Demo Projects</p>
      </div>

      <div className="flex flex-col items-center">
        <Counter start={9} target={90} />
        <p className="text-white text-lg mt-2 font-bold">Industrial Projects</p>
      </div>
    </div>
  )
}

const CounterSection = () => {


  return (
    <div className=' flex items-center justify-center'>
      <Number />
    </div>
  );
};

export default CounterSection;