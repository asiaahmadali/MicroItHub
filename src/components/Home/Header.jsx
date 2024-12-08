import { FaStar } from 'react-icons/fa';

function Header() {
    return (
      <>
        <div style={{ backgroundImage: "url('/images/hero_bg_2.jpg')"}} className="flex w-full bg-cover bg-no-repeat bg-center flex-col md:flex-row justify-between mb-[20px] md:mb-[50px] h-auto bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white pt-[50px] md:pt-[100px]">
         
         
             {/* Text Content Section*/}
          <div className="flex flex-col justify-center items-start w-full md:w-3/4 px-10 space-y-6 z-10 pb-[20px] md:pb-[100px]">
            <p className="md:text-xl text-[18px] tracking-wide text-purple-400">WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER</p>
            <p className="md:text-8xl text-xl font-semibold text-shadow-md leading-[50px] md:leading-[110px]">
              Transforming <span className="text-green-600 border-green-400 border-[2px]">IDEAS</span> into Software, Web, and Apps
            </p>

            <div className="flex md:flex-row flex-col justify-between gap-[10px] md:gap-[100px]">
                  {/* button */}
            <button className="bg-blue-500 text-white font-normal h-[50px] md:h-[60px] w-[200px] md:font-semibold text-[16px] md:text-[18px] p-[15px] md:py-4 md:px-8  rounded-[50px] hover:bg-blue-600 transition duration-300 ease-in-out">
                Get Started Now
            </button>

            {/* rating */}
            
              <div className="relative text-[18px] flex items-center justify-center gap-[10px] top-[10px] md:top-[60px] ">
                <div className='relative bottom-[50px]'>
                     <img src="images/arrow.png" alt="" />
                </div>

                <div>
                <p className="text-[15px] md:text-[18px]">(4,5/5 rating by clients)</p>
                    <div className='flex items-center mt-1 text-[15px] md:text-[18px] gap-1 text-yellow-400'>
                        <FaStar className='text-[10px] md:text-[18px]'></FaStar>
                        <FaStar className='text-[10px] md:text-[18px]'></FaStar>
                        <FaStar className='text-[10px] md:text-[18px]'></FaStar>
                        <FaStar className='text-[10px] md:text-[18px]'></FaStar>
                        <p className="text-white text-[15px] md:text-[18px]">More Details</p>    
                    </div>
                </div>
                
                   
                      
              </div>
            </div>

            

          </div>
  
          {/* Image Section */}
          <div className="">
            <img
              className="md:h-[700px] h-[400px] w-full md:w-[800px] object-cover p-[10px] rounded-[20px] "
              src="./images/intro.jpg"
              alt="Header Image"
            />
          </div>
         

          
        </div>
      </>
    );
  }
  
  export default Header;
  