import React from "react";
import { free, paid } from "../../utils/pricing.js";

const Pricing = () => {
  return (
    <div className="py-6">
      <div className="mt-6 text-center lg:mt-20">
        <h1 className="font-bold text-xl lg:text-3xl mb-2">Pricing</h1>
        <p className="text-lg mt-2">Choose a plan that's right for you</p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 my-4 lg:my-6">
        <div className="w-full shadow-lg rounded-lg p-4 bg-white flex flex-col">
          <div className="text-center">
            <p className="text-2xl lg:text-lg font-bold text-gray-500">
              LIFETIME
            </p>
            <h1 className="font-bold text-4xl lg:text-5xl mt-2">FREE</h1>
          </div>

          <p className="font-semibold text-lg text-center mt-4">
            Simple invoicing
          </p>
          <div className="flex flex-col items-center mt-4 px-4 lg:ml-24">
            <ul className="w-full text-left space-y-1">
              {free.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 text-lg">✔️</span>
                  <p className="text-sm lg:text-base">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Create Account
            </button>
          </div>
        </div>

        <div className="w-full shadow-lg rounded-lg p-4 bg-white flex flex-col">
          <div className="text-center">
            <p className="text-2xl lg:text-lg font-bold text-gray-500">
              LIFETIME
            </p>
            <h1 className="font-bold text-4xl lg:text-5xl mt-2">PAID</h1>
          </div>

          <p className="font-semibold text-lg text-center mt-4">
            Advanced invoicing & business tools
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 px-4">
            {paid.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✔️</span>
                <p className="text-sm lg:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
