import React from "react";
import Navbar from "../Home/Navbar";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton"; // Import the WhatsApp button component

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* WhatsApp Button: Always visible on all pages */}
      <WhatsAppButton />
    </div>
  );
};

export default MainLayOut;
