import React from 'react';

const Card = ({ iconClass, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      {/* Icon */}
      <div className="text-5xl text-indigo-600 mb-4">
        <i className={iconClass}></i> {/* Using Ionicons class */}
      </div>
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 py-12">
        {/* Card 1 */}
        <Card
          iconClass="ion-ios-code"
          title="Development"
          description="Build modern and scalable web applications using the latest technologies."
        />
        {/* Card 2 */}
        <Card
          iconClass="ion-ios-color-palette"
          title="Design"
          description="Create stunning and user-friendly designs that capture attention."
        />
        {/* Card 3 */}
        <Card
          iconClass="ion-ios-rocket"
          title="Deployment"
          description="Deploy your applications quickly and securely with our advanced solutions."
        />
      </div>
    </div>
  );
};

export default Cards;
