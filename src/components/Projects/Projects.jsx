import React from 'react';
import Data from './Data';

const Projects = () => {

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        {Data.map((card) => (
          <div key={card.id} className="relative group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-60 overflow-hidden group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Background overlay on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Buttons on hover */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={card.liveLink}
                      className="py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
                    >
                      Live Link
                    </a>
                    <a
                      href={card.codeLink}
                      className="py-2 px-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-300"
                    >
                      Code Link
                    </a>
                  </div>
                </div>
              </div>

              {/* Card title */}
              <div className="p-4">
                <h3 className="text-xl">{card.title}</h3>
              </div>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
