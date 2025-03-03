import React from "react";
import image from "/src/assets/Gstimage.png";

const AboutUs = () => {
  return (
    <div id="aboutus" className="py-8 px-4 sm:px-8 lg:px-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center mt-12">
        {/* Left Content */}
        <div className="text-center sm:text-start lg:ml-16">
          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl">
            We are Go GST Bill.
          </h1>
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mt-2">
            Simplifying Billing For Your Growing Business.
          </h2>
          <p className="text-lg sm:text-xl lg:text-lg text-gray-600 lg:mt-7 mt-5">
            GoGSTBill is a product of FinSync Technolabs Private Limited. We are
            based in Ahmedabad, Gujarat.
          </p>
          <p className="text-lg sm:text-xl lg:text-lg text-gray-600 lg:mt-8 mt-5">
            With GoGST Bill, we’ve reimagined the way businesses handle their
            financial transactions, making it easier and more convenient for you
            so you can focus on what you do best – growing your business.
          </p>
          <p className="text-lg sm:text-xl lg:text-lg text-gray-600 lg:mt-7 mt-5">
            GoGST Bill is not just software, we are a partner in your business
            journey.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end lg:mr-20">
          <img
            src={image}
            alt="About Us"
            className="max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
