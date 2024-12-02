import React from 'react';

const StyleButton = ({ title, bgColor = 'bg-white' }) => {
  return (
    <div>
      <button className={`py-2 px-6 rounded ml-8 md:ml-8 hover:bg-indigo-400 duration-500 ${bgColor}`}>  {title}</button>
    </div>
  );
};

export default StyleButton;