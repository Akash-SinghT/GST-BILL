import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" size={40} />,
    href: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <FaTwitter className="text-blue-400" size={40} />,
    href: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Facebook",
    icon: <FaFacebook className="text-blue-600" size={40} />,
    href: "https://facebook.com/",
  },
  {
    id: 4,
    name: "Mail",
    icon: <HiOutlineMail className="text-red-500" size={40} />,
    href: "mailto:sakashh@gmail.com",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is 'number' (mobile number), check the length
    if (name === "number" && value.length > 10) {
      setError("Mobile number must be exactly 10 digits.");
    } else {
      setError(""); // Clear error if number is correct
    }

    // Update the formData state
    setFormData({ ...formData, [name]: value });
  };

  const Submithandler = async (e) => {
    e.preventDefault();

    // Validate that the mobile number is provided and is exactly 10 digits
    if (!formData.number || formData.number.length !== 10) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    try {
      const res = await axios.post(
        "https://gst-bill-2dy0.onrender.com/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/formsubmit");
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white py-6 pt-20 sm:pt-24 pb-6 sm:pb-10 flex justify-center">
      <div className="max-w-screen-lg w-full text-center">
        <p className="text-5xl font-bold text-gray-800 border-gray-300 mb-6">
          Contact Us
        </p>
        <p className="text-gray-600 text-lg mb-10">
          For any questions or support simply complete the form below and a
          member of our support team will review and respond promptly to your
          request.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 shadow-lg rounded-lg items-start lg:pr-11">
            <form onSubmit={Submithandler} className="flex flex-col space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-4 text-lg w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 text-lg w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="tel"
                name="number"
                placeholder="Mobile No"
                value={formData.number}
                onChange={handleChange}
                required
                className="p-4 text-lg w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              />

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-4 text-lg w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>

              <button className="text-white text-lg bg-blue-500 px-8 py-4 mt-4 flex items-center justify-center rounded-md hover:bg-blue-600 transition-transform duration-300 shadow-md">
                Submit
                <FaPaperPlane className="ml-3 text-xl" />
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info & Social Links */}
          <div className="flex flex-col items-center space-y-6 text-lg text-gray-700 lg:pl-24 lg:mt-24">
            <div className="flex items-center space-x-4 lg:text-3xl">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <p>sakashh165@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 lg:text-3xl lg:pt-5">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <p>+91 XXXXXXXXXXX</p>
            </div>
            <div className="flex items-center space-x-4 lg:text-3xl lg:pt-5">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <p>Raebareli, India</p>
            </div>

            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800 mb-4 lg:text-3xl lg:pt-5">
                Connect with Us:
              </p>
              <div className="flex flex-wrap justify-center md:justify-center gap-6 lg:text-3xl lg:pt-5">
                {socialLinks.map(({ id, icon, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-125"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ContactUs;
