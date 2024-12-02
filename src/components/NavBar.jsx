import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex h-[100px] items-center justify-around w-full top-0 left-0 p-5 bg-gradient-to-r from-white via-blue-400 to-blue-950 shadow-lg">
        <img className="h-[70px] w-[150px]" src="./images/MicroLogo.png" alt="logo" />

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <FaBars className="text-white text-2xl" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <Link to="/" className="cursor-pointer text-white hover:text-gray-300">HOME</Link>

          {/* Services Dropdown */}
          <li className="relative cursor-pointer text-white hover:text-gray-300">
            SERVICES
            <i className="fas fa-caret-down ml-2"></i>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-8 w-60 bg-purple-800 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2">
              <Link to="/software-development" className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
                <i className="fas fa-cogs mr-2"></i> Software Development
              </Link>
              <Link to="/web-development" className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
                <i className="fas fa-laptop-code mr-2"></i> Web Development
              </Link>
              <Link to="/mobile-app-development" className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
                <i className="fas fa-mobile-alt mr-2"></i> Mobile App Development
              </Link>
            </ul>
          </li>

          <Link to="/careers" className="text-white hover:text-gray-300 cursor-pointer">CAREERS</Link>
          <Link to="/aboutUs" className="text-white hover:text-gray-300 cursor-pointer">ABOUT US</Link>
          <Link to="/contactUs" className="text-white hover:text-gray-300 cursor-pointer">CONTACT US</Link>
        </ul>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-black to-purple-800 text-white p-5 space-y-8 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close icon */}
        <div className="flex justify-end">
          <FaTimes
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)} 
          />
        </div>

        {/* Mobile Menu Items */}
        <ul className="space-y-10 text-xl">
          <Link to="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link>
          <Link to="/services" className="text-white hover:text-gray-300 cursor-pointer">SERVICES</Link>
          <Link to="/careers" className="text-white hover:text-gray-300 cursor-pointer">CAREERS</Link>
          <Link to="/aboutUs" className="text-white hover:text-gray-300 cursor-pointer">ABOUT US</Link>
          <Link to="/contactUs" className="text-white hover:text-gray-300 cursor-pointer">CONTACT US</Link>
        </ul>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)} 
        ></div>
      )}
    </>
  );
}

export default NavBar;
