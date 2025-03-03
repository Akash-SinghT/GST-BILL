import React from "react";
import { feature, whytochoose } from "../../utils/FullFeature.js";

const FeatureFullPage = () => {
  return (
    <div className="py-12">
      <div className="text-center pt-12">
        <h1 className="font-bold text-4xl lg:text-5xl">
          Free GST Billing Software
        </h1>
        <p className=" font semi bold text-gray-700 text-xl lg:text-3xl lg:mt-5 mt-2">
          Best GST Billing Software for Small & Medium Businesses
        </p>
      </div>

      {/* Feature Grid Container */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 lg:my-12 my-10">
        {feature.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-6xl text-blue-500 mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
            <p className="text-lg text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center pt-12">
        <h1 className="font-bold text-4xl lg:text-5xl">
          Why You Should Use Go GST?
        </h1>
      </div>

      {/* Feature Grid Container */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 lg:my-12 my-10">
        {whytochoose.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-6xl text-blue-500 mb-6 text-center">
              {item.icon}
            </div>

            <p className="text-xl text-gray-700 mt-2 text-center ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureFullPage;
