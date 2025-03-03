import React from "react";
import image from "/src/assets/enquiry.png";
import { Link } from "react-router-dom";

const UserInquiry = () => {
  return (
    <div className="pt-12">
      <div className="py-12 bg-gradient-to-r from-orange-500 to-yellow-500 px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={image}
              alt="User Inquiry"
              className="rounded-xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">
              Need help? We’re here!
            </h1>
            <p className="text-base sm:text-lg lg:text-base text-white font-semibold mt-6 sm:mt-8">
              Whether you have questions about features, customizations, trials,
              pricing, need a demo, or anything else, our support team is ready
              to answer all your queries regarding our online GST billing
              software.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-4 sm:gap-6">
              <button className="w-full sm:w-auto px-5 py-2 bg-white hover:bg-gray-500 text-gray-900 hover:text-white font-bold text-lg lg:text-base rounded-lg transition duration-300 border-2 border-gray-600">
                <Link to="/contactus">Contact Us</Link>
              </button>
              <button className="w-full sm:w-auto px-5 py-2 bg-white hover:bg-gray-500 text-gray-900 hover:text-white font-bold text-lg lg:text-base rounded-lg transition duration-300 border-2 border-gray-600">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInquiry;
