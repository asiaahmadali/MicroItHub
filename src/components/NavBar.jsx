import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For toggling Services menu (mobile)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <nav className="flex h-[120px] w-full top-0 left-0 bg-blue-950 shadow-lg">
        <div className="bg-white flex items-center justify-center p-[60px]" style={{ backgroundImage: "url('/images/logo-bg.svg')" }}>
          <img className="h-[70px] w-[200px]" src="./images/MicroLogo.png" alt="logo" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex items-center md:justify-center justify-end pr-[20px] w-full">
          <div className="md:hidden flex items-center bg-blue-600 p-4 rounded-md hover:cursor-pointer hover:bg-blue-900" onClick={toggleMenu}>
            <FaBars className="text-white text-2xl" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center justify-center">
            <Link to="/" className="cursor-pointer text-white hover:text-gray-300 pb-4">HOME</Link>

            {/* Services Dropdown for Large Screens */}
            <li className="relative group cursor-pointer text-white hover:text-gray-300 pb-4">
              <div className="flex items-center">
                <span>SERVICES</span>
                {/* Caret for large screens */}
                <i className="fas fa-caret-down ml-2" />
              </div>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-2 w-80 p-[10px] bg-white text-[16px] font-semibold text-blue-950 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2">
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

            <Link to="/careers" className="text-white hover:text-gray-300 cursor-pointer pb-4">CAREERS</Link>
            <Link to="/aboutUs" className="text-white hover:text-gray-300 cursor-pointer pb-4">ABOUT US</Link>
            <Link to="/contactUs" className="text-white hover:text-gray-300 cursor-pointer pb-4">CONTACT US</Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 left-0 w-[75vw] h-full bg-white text-blue-950  space-y-8 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50 overflow-y-auto`}>
        {/* Close icon */}
        <div className='bg-blue-100'>
        <div className="flex justify-end p-2">
          <FaTimes className="text-blue-950 text-2xl p-[4px] bg-blue-300 rounded-full cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>

        {/* Logo in the sidebar */}
        <div className="flex items-center justify-center p-5 bg-blue-100">
          <img className="h-[100px] w-[200px]" src="./images/MicroLogo.png" alt="logo" />
        </div>
        </div>

        {/* Mobile Menu Items */}
        <ul className="space-y-6 p-5 text-sm sm:text-lg"> {/* Adjusted text size for smaller screens */}
          <li className="border-b-[1px] border-b-gray-300 pb-4">
            <Link to="/" className="text-blue-950 hover:text-gray-500 cursor-pointer flex items-center">
              <span className="mr-2 text-xl">{">"}</span> HOME
            </Link>
          </li>

          {/* SERVICES item as second option with full bottom border */}
          <li className="border-b-[1px] border-b-gray-300 pb-4">
            <div className="flex items-center justify-between" onClick={toggleServices}>
              <span className="flex items-center">
                <span className="mr-2 text-xl">{">"}</span> SERVICES
              </span>
              <i className={`ml-2 ${isServicesOpen ? 'fas fa-minus' : 'fas fa-plus'} text-blue-950 p-[10px] bg-gray-300 rounded-full`} />
            </div>
            {isServicesOpen && (
              <ul className="space-y-4">
                <li className="pl-5">
                  <Link to="/software-development" className="text-blue-950 hover:text-gray-500 cursor-pointer">Software Development</Link>
                </li>
                <li className="pl-5">
                  <Link to="/web-development" className="text-blue-950 hover:text-gray-500 cursor-pointer">Web Development</Link>
                </li>
                <li className="pl-5">
                  <Link to="/mobile-app-development" className="text-blue-950 hover:text-gray-500 cursor-pointer">Mobile App Development</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-b-[1px] border-b-gray-300 pb-4">
            <Link to="/careers" className="text-blue-950 hover:text-gray-500 cursor-pointer flex items-center">
              <span className="mr-2 text-xl">{">"}</span> CAREERS
            </Link>
          </li>
          <li className="border-b-[1px] border-b-gray-300 pb-4">
            <Link to="/aboutUs" className="text-blue-950 hover:text-gray-500 cursor-pointer flex items-center">
              <span className="mr-2 text-xl">{">"}</span> ABOUT US
            </Link>
          </li>
          <li className="border-b-[1px] border-b-gray-300 pb-4">
            <Link to="/contactUs" className="text-blue-950 hover:text-gray-500 cursor-pointer flex items-center">
              <span className="mr-2 text-xl">{">"}</span> CONTACT US
            </Link>
          </li>
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
