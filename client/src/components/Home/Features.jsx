import React from "react";
import { features } from "../../utils/Features.js";
import { SiCachet } from "react-icons/si";

const Features = () => {
  return (
    <div className="py-12 bg-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-center leading-tight">
          Features of GST Billing and Accounting Software
        </h2>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {features.map((column, id) => (
            <ul key={id} className="space-y-6">
              {column.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <SiCachet
                    className="text-green-500 flex-shrink-0"
                    size={30}
                  />
                  <span className="text-gray-700 text-lg sm:text-xl lg:text-2xl font-semibold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
