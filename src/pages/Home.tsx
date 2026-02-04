import { Link } from "react-router-dom";
import homeimg from "../assets/home-img.png";

const Home: React.FC = () => {
  return (
      <div className="grid md:grid-cols-2 place-items-center px-6 py-10 font-sans">
        <section id="home" className="text-[#3F3D56] pl-4">
          <h2 className="text-6xl font-bold mb-4 text-[#323233]">Welcome to Library Hub</h2>
          <p className="mb-6 text-lg text-">
            "Discover thousands of books and manage your reading journey
            effortlessly."
          </p>
          <Link to="/signup" className="bg-[#181C14] text-white px-6 py-2 rounded-full hover:text-lg">Get Started</Link>  
        </section>
        <section >
          <img src={homeimg} alt="home" className="max-w-xl w-full" />
        </section>
      </div>
  );
};

export default Home;
