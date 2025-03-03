import React, { useState } from "react";
import { faqList } from "../../utils/FAQ.js";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-12 rounded-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">
          {faqList.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-2xl sm:text-xl lg:text-2xl font-semibold border-b-2 border-gray-300 hover:bg-gray-100 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-gray-700">
                  {openIndex === index ? (
                    <FaAngleUp size={24} />
                  ) : (
                    <FaAngleDown size={24} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 text-lg sm:text-lg font-medium leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
