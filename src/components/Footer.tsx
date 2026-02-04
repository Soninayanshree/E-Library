import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="grid md:grid-cols-3 gap-8 bg-[#181C14] text-white items-center">
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <p>support@libraryhub.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-lg" />
            <p>+91 1234567890</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-md font-medium mb-2">Quick Links</p>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="p-6 ">
          <p className="text-md font-medium mb-2">Connect Us</p>
          <div className="w-28 grid grid-cols-3 items-center text-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-white hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-white hover:text-sky-400 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-red-100 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-2">© 2025 Library Hub. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
