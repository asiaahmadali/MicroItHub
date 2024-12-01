function Header() {
    return (
      <>
        <div className="flex justify-between h-auto bg-gradient-to-r from-gray-400 to-indigo-600 text-white pt-[100px]">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center items-start w-1/2 px-10 space-y-6 z-10">
            <p className="text-xl  tracking-wide text-purple-900">WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER</p>
            <p className="text-8xl font-semibold text-shadow-md leading-[110px]">
              Transforming <span className="text-green-600 border-green-400 border-[2px]">IDEAS</span> into Software, Web, and Apps
            </p>

            <div className="flex justify-between gap-[200px]">
                  {/* button */}
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started Now
            </button>

            {/* rating */}
              <div>
                    <p>(4,5/5 rating by clients)</p>
                    <p>More Details</p>       
              </div>
            </div>

            

          </div>
  
          {/* Image Section */}
          <div className="">
            <img
              className="h-[700px] w-[600px] object-cover p-[10px] rounded-[20px] "
              src="./images/intro.jpg"
              alt="Header Image"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
  