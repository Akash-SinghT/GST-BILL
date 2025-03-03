import React from "react";
import { testimonials } from "../../utils/reviews.js";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div id="reviews" className="py-12">
      <div className="mt-10">
        <h1 className="font-bold text-4xl text-center mb-10 lg:text-4xl">
          See What Our Users Say
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-5 shadow-lg">
              <p className="text-gray-700 text-xl lg:text-lg italic">
                {testimonial.review}
              </p>

              <div className="flex items-start mt-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-500 text-xl lg:text-lg"
                  />
                ))}
              </div>
              <div className="flex items-end mt-2">
                <div className="mt-4">
                  <h2 className="font-bold text-xl lg:text-lg">
                    {testimonial.name}
                  </h2>
                  <h3 className="font-semibold text-sm lg:text-xs text-gray-600 text-start">
                    {testimonial.role}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
