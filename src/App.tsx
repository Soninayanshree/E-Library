import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

const App:React.FC = () => {
  return (
    <div className="pt-24">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
