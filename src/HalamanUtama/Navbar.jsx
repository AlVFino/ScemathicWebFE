import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
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

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 text-2xl">
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu */}
          <div className={`sm:flex space-x-6 hidden`}>
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/AllC1" className="text-gray-700 hover:text-gray-900">Course</Link>
            <Link to="/AllE1" className="text-gray-700 hover:text-gray-900">Event</Link>
            <Link to="/About" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/Contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Tombol Login & Register */}
          <div className="hidden sm:flex items-center space-x-3">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4 ">
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/AllC1" className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Course</Link>
          <Link to="/AllE1" className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Event</Link>
          <Link to="/About" className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Contact" className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex flex-col space-y-2">
            <Link to="/Login">
              <button className="bg-gray-800 text-white px-4 py-2 rounded w-full hover:bg-gray-700">
                Login
              </button>
            </Link>
            <Link to="/Dasboard">
              <button className="bg-gray-800 text-white px-4 py-2 rounded w-full hover:bg-gray-700">
                Dasboard
              </button>
            </Link>
            <Link to="/Regis">
              <button className="border-2 border-gray-800 text-gray-800 px-4 py-2 rounded w-full hover:bg-gray-800 hover:text-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
