import React from "react";
import { Link } from "react-router-dom";
import image from "/src/assets/new-vyapar-hero.webp"; // Adjust the path if needed
import Features from "./Features";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import UserInquiry from "./UserInquiry";
import Popup from "../pages/Popup"; // Ensure this path is correct

const HomePage = () => {
  return (
    <>
      <div className="pt-16 px-4 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 lg:mt-24 mt-8">
          {/* Left Content */}
          <div className="text-center sm:text-start lg:pl-14">
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight text-gray-900">
              GST Billing Software in India for Small Businesses
            </h1>
            <p className="text-lg sm:text-xl lg:text-lg text-gray-600 mt-4 sm:mt-5">
              Manage your business professionally with Vyapar, India’s leading
              software for billing, inventory, and accounting. Join 1 Cr+
              satisfied SMEs in India who trust Vyapar.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-5">
              <Link to="/signup">Get Started</Link>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:pr-14">
            <img
              src={image}
              alt="Billing Software"
              className="max-w-full h-auto lg:max-w-[80%]"
            />
          </div>
        </div>
      </div>

      {/* Popup Component - Ensured it appears only once */}
      <Popup />

      {/* Other Sections */}
      <AboutUs />
      <Features />
      <FAQ />
      <Testimonials />
      <UserInquiry />
    </>
  );
};

export default HomePage;
