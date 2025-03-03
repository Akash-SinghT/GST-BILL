import React from "react";
import { free, paid } from "../../utils/pricing.js";

const Pricing = () => {
  return (
    <div className="py-12">
      <div className="mt-12 text-center">
        <h1 className="font-bold text-2xl lg:text-5xl mb-3">Pricing</h1>
        <p className="text-2xl mt-5">Choose a plan that's right for you</p>
      </div>

      {/* Grid Layout with Paid Plan Taking More Space */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 my-6 lg:my-12">
        {/* Free Plan (Smaller) */}
        <div className="w-full shadow-lg rounded-lg p-8 bg-white flex flex-col">
          <div className="text-center">
            <p className="text-4xl lg:text-2xl font-bold text-gray-500">
              LIFETIME
            </p>
            <h1 className="font-bold text-7xl lg:text-8xl mt-4">FREE</h1>
          </div>

          <p className="font-semibold text-2xl text-center mt-6">
            Simple invoicing
          </p>
          <div className="flex flex-col items-center mt-8 px-8 lg:ml-28">
            <ul className="w-full text-left space-y-3">
              {free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✔️</span>
                  <p className="text-lg lg:text-xl">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Create Account
            </button>
          </div>
        </div>

        {/* Paid Plan (Takes More Space) */}
        <div className="w-full shadow-lg rounded-lg p-8 bg-white flex flex-col">
          <div className="text-center">
            <p className="text-4xl lg:text-2xl font-bold text-gray-500">
              LIFETIME
            </p>
            <h1 className="font-bold text-7xl lg:text-8xl mt-4">PAID</h1>
          </div>

          <p className="font-semibold text-2xl text-center mt-6">
            Advanced invoicing & business tools
          </p>

          {/* Split Paid Features into 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
            {paid.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✔️</span>
                <p className="text-lg lg:text-xl">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
