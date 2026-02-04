import React from "react";
import aboutimg from "../assets/about-img.png";
import { FaBook, FaRocket,FaLightbulb } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 place-items-center px-6 py-10 font-sans gap-10">
        <section className="text-[#3F3D56] pl-6">
          <h2 className="text-6xl font-bold mb-4 text-[#323233]">About Us</h2>
          <p className="mb-6 text-lg font-semibold text-gray-600">
            Our platform is designed to support students, professionals, and
            lifelong learners by offering a wide range of books, digital
            resources, and learning materials. We believe that knowledge should
            be accessible to everyone, anytime and anywhere.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2 items-center">
              <FaBook/>Access to a vast collection of books and learning resources
            </li>
            <li className="flex gap-2 items-center"><FaEarthAfrica/>Open and inclusive platform for all learners</li>
            <li className="flex gap-2 items-center"><FaLightbulb/>Encouraging curiosity, creativity, and growth</li>
            <li className="flex gap-2 items-center"><FaRocket/> Built using modern and user-friendly technologies</li>
          </ul>
        </section>
        <section>
          <img
            src={aboutimg}
            alt="about"
            className="max-w-md w-full"
          />
        </section>
      </div>
        <section className="py-20 px-4 bg-[#323233] text-center ">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl hover:shadow-lg transition bg-[#F2F2F2]">
            <h3 className="text-xl font-bold mb-2">Huge Collection</h3>
            <p>Access thousands of books from various genres and authors.</p>
          </div>
          <div className="p-6 rounded-xl hover:shadow-lg transition bg-[#F2F2F2]">
            <h3 className="text-xl font-bold mb-2">Easy Search</h3>
            <p>Quickly find books with our powerful search and filters.</p>
          </div>
          <div className="p-6 rounded-xl hover:shadow-lg transition bg-[#F2F2F2]">
            <h3 className="text-xl font-bold mb-2">Personal Library</h3>
            <p>Save your favorite books and track your reading progress.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
