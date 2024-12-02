import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      {subtitle && <p className="text-md font-bold text-white mt-2 uppercase mb-2">{subtitle}</p>}
      <h4 className="text-5xl font-bold text-white">{title}</h4>

    </div>
  );
};

export default Title;