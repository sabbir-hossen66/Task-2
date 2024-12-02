
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
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-5xl font-bold text-white'>
        <span>{counter}+</span>
      </div>
    </div>
  );
};


const Number = () => {
  return (
    <div className="flex justify-center gap-8">
      <div className="flex flex-col items-center">
        <Counter start={2} target={50} />
        <p className="text-white font-bold text-lg">Client Projects</p>
      </div>

      <div className="flex flex-col items-center">
        <Counter start={7} target={70} />
        <p className="text-white font-bold text-lg">Demo Projects</p>
      </div>

      <div className="flex flex-col items-center">
        <Counter start={9} target={90} />
        <p className="text-white font-bold text-lg">Industrial Projects</p>
      </div>
    </div>

  )
}

const CounterSection = () => {


  return (
    <div className='flex-1 items-center'>
      <Number />
    </div>
  );
};

export default CounterSection;