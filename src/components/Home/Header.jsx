import { FaStar } from 'react-icons/fa';

function Header() {
    return (
      <>
        <div className="flex justify-between mb-[50px] h-auto bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white pt-[100px]">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center items-start w-3/4 px-10 space-y-6 z-10 pb-[100px]">
            <p className="text-xl  tracking-wide text-purple-400">WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER</p>
            <p className="text-8xl font-semibold text-shadow-md leading-[110px]">
              Transforming <span className="text-green-600 border-green-400 border-[2px]">IDEAS</span> into Software, Web, and Apps
            </p>

            <div className="flex justify-between gap-[200px]">
                  {/* button */}
            <button className="bg-blue-500 text-white font-semibold text-xl py-4 px-8 rounded-[50px] hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started Now
            </button>

            {/* rating */}
              <div className="relative text-[18px] top-[60px] ">
                    <p className="">(4,5/5 rating by clients)</p>
                    <div className='flex items-center mt-1 gap-1 text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <p className="text-white">More Details</p>    
                    </div>
                      
              </div>
            </div>

            

          </div>
  
          {/* Image Section */}
          <div className="">
            <img
              className="h-[700px] w-[800px] object-cover p-[10px] rounded-[20px] "
              src="./images/intro.jpg"
              alt="Header Image"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
  