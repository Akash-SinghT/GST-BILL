import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../../utils/navelement.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const navbarHandler = (texttype) => {
    if (texttype === "Home") {
      navigate("/");
    } else if (texttype === "Pricing") {
      navigate("/pricing");
    } else if (texttype === "Features") {
      navigate("/features");
    } else if (texttype === "Partner") {
      navigate("/signup");
    } else if (texttype === "Contact Us") {
      navigate("/contactus");
    } else if (
      texttype === "AboutUs" ||
      texttype === "Reviews" ||
      texttype === "FAQ"
    ) {
      const section = document.getElementById(texttype.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setNav(false); // Close menu after navigation
  };

  return (
    <div className="flex justify-between items-center w-full h-20 bg-white text-black fixed  px-4 z-50 ">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-extrabold ml-2 text-gray-800">GST Bill</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, name }) => (
          <li
            key={id}
            onClick={() => navbarHandler(name)}
            className="px-4 cursor-pointer capitalize font-medium text-lg text-gray-600 transition duration-200 hover:text-green-600"
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-600 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-green-400 z-40">
          {links.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => navbarHandler(name)}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
