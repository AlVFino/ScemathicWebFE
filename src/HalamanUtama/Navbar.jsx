import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white transition-all duration-300 ${
        scroll ? "shadow-lg rounded-b-2xl" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <p className="text-gray-900 font-bold text-2xl">Schematic</p>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              <Link to="/">
                <a href="#hero-section" className="text-gray-700 hover:text-gray-900">Home</a>
              </Link>
              <Link to="/AllC1">
                <a href="#Course" className="text-gray-700 hover:text-gray-900">Course</a>
              </Link>
              <Link to="/AllE1">
                <a href="#Event" className="text-gray-700 hover:text-gray-900">Event</a>
              </Link>
              <Link to="/About">
                <a href="#AboutMe" className="text-gray-700 hover:text-gray-900">About</a>
              </Link>
              <Link to="/Contact">
                <a href="#Contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              </Link>
            </div>
          </div>

          {/* Tombol Login & Register */}
          <div className="flex items-center space-x-3">
            <Link to="/Login">
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Login
              </button>
            </Link>
            <Link to="/Dasboard">
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Dasboard
              </button>
            </Link>
            <Link to="/Regis">
              <button className="border-2 border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
