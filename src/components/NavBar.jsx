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
      <nav className="flex h-[120px] w-full top-0 left-0 bg-blue-950 shadow-lg">
        <div className="bg-white flex items-center justify-center p-[60px]" style={{ backgroundImage: "url('/images/logo-bg.svg')" }}>
          <img className="h-[70px] w-[200px]" src="./images/MicroLogo.png" alt="logo" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex items-center justify-center w-full">
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <FaBars className="text-white text-2xl" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center justify-center">
            <Link to="/" className="cursor-pointer text-white hover:text-gray-300">HOME</Link>

            {/* Services Dropdown */}
            <li className="relative group cursor-pointer text-white hover:text-gray-300">
              SERVICES
              <i className="fas fa-caret-down ml-2"></i>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-8 w-80 p-[10px] bg-white text-[16px] font-semibold text-blue-950 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                <Link to="/software-development" className="flex items-center px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-200">
                  <i className="fas fa-cogs mr-2 text-[18px] md:text-xl text-blue-500"></i> Software Development
                </Link>
                <Link to="/web-development" className="flex items-center px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-200">
                  <i className="fas fa-laptop-code mr-2 text-[18px] md:text-xl text-blue-500"></i> Web Development
                </Link>
                <Link to="/mobile-app-development" className="flex items-center px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-200">
                  <i className="fas fa-mobile-alt mr-2 text-[18px] md:text-xl text-blue-500"></i> Mobile App Development
                </Link>
              </ul>
            </li>

            <Link to="/careers" className="text-white hover:text-gray-300 cursor-pointer">CAREERS</Link>
            <Link to="/aboutUs" className="text-white hover:text-gray-300 cursor-pointer">ABOUT US</Link>
            <Link to="/contactUs" className="text-white hover:text-gray-300 cursor-pointer">CONTACT US</Link>
          </ul>

        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-black to-purple-800 text-white p-5 space-y-8 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        {/* Close icon */}
        <div className="flex justify-end">
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>

        {/* Mobile Menu Items */}
        <ul className="space-y-10 text-xl">
          <li><Link to="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link></li>
          <li><Link to="/services" className="text-white hover:text-gray-300 cursor-pointer">SERVICES</Link></li>
          <li><Link to="/careers" className="text-white hover:text-gray-300 cursor-pointer">CAREERS</Link></li>
          <li><Link to="/aboutUs" className="text-white hover:text-gray-300 cursor-pointer">ABOUT US</Link></li>
          <li><Link to="/contactUs" className="text-white hover:text-gray-300 cursor-pointer">CONTACT US</Link></li>
        </ul>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}

export default NavBar;
