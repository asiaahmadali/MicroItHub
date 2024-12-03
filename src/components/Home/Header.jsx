import { FaStar } from 'react-icons/fa';

function Header() {
    return (
      <>
        <div style={{ backgroundImage: "url('/images/hero_bg_2.jpg')"}} className="flex  bg-cover bg-no-repeat bg-center md:flex-row flex-col justify-between mb-[20px] md:mb-[50px] h-auto bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white pt-[50px] md:pt-[100px]">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 px-10 space-y-6 z-10 pb-[20px] md:pb-[100px]">
            <p className="md:text-xl text-[18px] tracking-wide text-purple-400">WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER</p>
            <p className="md:text-8xl text-xl font-semibold text-shadow-md leading-[50px] md:leading-[110px]">
              Transforming <span className="text-green-600 border-green-400 border-[2px]">IDEAS</span> into Software, Web, and Apps
            </p>

            <div className="flex md:flex-row flex-col justify-between gap-[10px] md:gap-[200px]">
                  {/* button */}
            <button className="bg-blue-500 text-white font-normal  md:font-semibold text-[16px] md:text-xl p-[15px] md:py-4 md:px-8  rounded-[50px] hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started Now
            </button>

            {/* rating */}
              <div className="relative text-[18px] top-[10px] md:top-[60px] ">
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
              className="md:h-[700px] h-[400px] w-auto md:w-[800px] object-cover p-[10px] rounded-[20px] "
              src="./images/intro.jpg"
              alt="Header Image"
            />
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
  