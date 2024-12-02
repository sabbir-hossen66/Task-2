import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      <h4 className="text-3xl font-bold text-indigo-600">{title}</h4>
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>} {/* Subtitle is optional */}
    </div>
  );
};

export default Title;