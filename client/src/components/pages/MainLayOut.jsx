import React from "react";
import Navbar from "../Home/Navbar";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default MainLayOut;
