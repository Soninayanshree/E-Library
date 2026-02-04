import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#181C14] text-white z-50">
        <div className="flex items-center justify-between px-6 py-4">

          <img className="h-16 rounded-full" src={logo} alt="library hub" />

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 text-lg ">
              <li><Link to="/" className="hover:text-xl hover:font-medium">Home</Link></li>
              <li><Link to="/about" className="hover:text-xl hover:font-medium">About</Link></li>
              <li><Link to="/" className="hover:text-xl hover:font-medium">Contact</Link></li>
              <li>
                <Link
                  to="/signup"
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold"
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden bg-[#181C14]">
            <ul className="flex flex-col items-center gap-6 py-6 text-base">
              <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/">Contact</Link></li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/signup"
                  className="bg-white text-black px-6 py-2 rounded-full font-semibold"
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;

