import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">

        <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg w-full max-w-sm p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Free</h2>
          <p className="text-xl text-gray-600">Perfect for individuals</p>
          <div className="text-4xl font-bold text-gray-800">$0</div>
          <p className="text-sm text-gray-600">Per month</p>
          <ul className="space-y-2 text-gray-700">
            <li>1 GB Storage</li>
            <li>Basic Support</li>
            <li>Limited Features</li>
          </ul>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">Get Started</button>
        </div>

        <div className="flex flex-col items-center bg-gray-300 rounded-lg shadow-lg w-full max-w-sm p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Standard</h2>
          <p className="text-xl text-gray-600">For small teams</p>
          <div className="text-4xl font-bold text-gray-800">$15</div>
          <p className="text-sm text-gray-600">Per month</p>
          <ul className="space-y-2 text-gray-700">
            <li>10 GB Storage</li>
            <li>Standard Support</li>
            <li>Advanced Features</li>
          </ul>
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">Get Started</button>
        </div>

        <div className="flex flex-col items-center bg-indigo-700 text-white rounded-lg shadow-lg w-full max-w-sm p-6 space-y-6">
          <h2 className="text-3xl font-semibold">Premium</h2>
          <p className="text-xl">For businesses and power users</p>
          <div className="text-4xl font-bold">$29</div>
          <p className="text-sm">Per month</p>
          <ul className="space-y-2">
            <li>50 GB Storage</li>
            <li>Priority Support</li>
            <li>Full Features</li>
          </ul>
          <button className="bg-white text-indigo-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">Choose Premium</button>
        </div>


      </div>
    </div>

  );
};

export default Pricing;