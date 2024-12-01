

function NavBar() {
  
  return (
    <>
      <nav className="flex h-[100px] items-center gap-[250px] w-full  top-0 left-0  p-5 bg-gradient-to-r from-white  to-black shadow-lg">
        <img className="h-[70px] w-[150px]" src="./images/MicroLogo.png" alt="logo" />

        {/* nav items */}
        <ul className="flex space-x-8">
        <li className="relative group cursor-pointer text-white hover:text-gray-300">
        HOME
        </li>
        <li className="relative group cursor-pointer text-white hover:text-gray-300">
          SERVICES
        <i className="fas fa-caret-down ml-2"></i>

  {/* Dropdown menu */}
  <ul
    className="absolute left-0 mt-8 w-60 bg-purple-800 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-2"
  >
    <li className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
      <i className="fas fa-cogs mr-2"></i> Software Development
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
      <i className="fas fa-laptop-code mr-2"></i> Web Development
    </li>
    <li className="flex items-center px-4 py-2 hover:bg-red-600 cursor-pointer transition-colors duration-200">
      <i className="fas fa-mobile-alt mr-2"></i> Mobile App Development
    </li>
  </ul>
</li>


          <li className="text-white hover:text-gray-300 cursor-pointer">CAREERS</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">ABOUT US</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">CONTACT US</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
