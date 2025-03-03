import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [number, setNumber] = useState("");

  useEffect(() => {
    // Check if popup has already been shown in localStorage
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) {
          setShowPopup(true);
          localStorage.setItem("hasSeenPopup", "true"); // Mark popup as shown permanently
          window.removeEventListener("scroll", handleScroll); // Remove listener
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
            onClick={closePopup}
          >
            &times;
          </button>

          {/* Popup Content */}
          <div className="text-center">
            <h1 className="font-bold text-3xl text-red-500">
              Still Scrolling?
            </h1>
            <h3 className="font-bold text-2xl text-black mt-2">Let Us Help</h3>
            <p className="text-lg text-gray-700 mt-1">
              Not sure if it fits your needs?
            </p>
            <p className="text-gray-600">
              Our Experts are here! Get a free consultation now.
            </p>
          </div>

          {/* Input and Button */}
          <div className="mt-4">
            <input
              type="tel"
              name="number"
              placeholder="Enter Mobile No"
              value={number}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="w-full bg-red-600 text-white font-bold py-2 mt-3 rounded-md hover:bg-red-700 transition">
              <Link to="/contactus">Talk with our experts</Link>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
