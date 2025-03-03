import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 lg:right-10 z-50">
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={32} />
      </button>

      {/* WhatsApp Chat Popup */}
      {open && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg p-4 rounded-lg w-64">
          <p className="text-lg font-semibold">Chat with us on WhatsApp</p>
          <a
            href="https://wa.me/919876543210" // Change to your number
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
