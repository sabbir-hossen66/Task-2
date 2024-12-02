import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      {subtitle && <p className="text-md font-bold text-white mt-2 uppercase">{subtitle}</p>}
      <h4 className="text-5xl font-bold text-white">{title}</h4>

    </div>
  );
};

export default Title;