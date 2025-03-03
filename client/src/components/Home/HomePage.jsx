import React from "react";
import image from "/src/assets/new-vyapar-hero.webp";
import Features from "./Features";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import UserInquiry from "./UserInquiry";
import { Link } from "react-router-dom";
import Popup from "../pages/Popup";

const HomePage = () => {
  return (
    <>
      <div className="pt-24 px-4 sm:px-8  lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 lg:mt-16">
          {/* Left Content */}
          <div className="text-center sm:text-start lg:pl-20">
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-8xl leading-tight text-gray-900">
              GST Billing Software in India for Small Businesses
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-5 lg:mt-5">
              Manage your business professionally with Vyapar, India’s leading
              software for billing, inventory, and accounting. Join 1 Cr+
              satisfied SMEs in India who trust Vyapar.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-6 ">
              <Link to="/signup">Get Started</Link>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:pr-20">
            <img
              src={image}
              alt="Billing Software"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Popup />
      <AboutUs />
      <Features />
      <FAQ />
      <Testimonials />
      <UserInquiry />
    </>
  );
};

export default HomePage;
