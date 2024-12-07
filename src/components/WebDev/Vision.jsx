import { FaPlay } from 'react-icons/fa';

function Vision()
{
    return <>
      <div style={{ backgroundImage: "url('/images/vision-bg.png')" }} className="flex bg-gray-100 bg-no-repeat  md:flex-row flex-col p-[20px] md:p-[50px] items-center justify-between gap-[50px]">
             
              {/* vision text */}
              <div className=" w-full flex flex-col gap-[30px]">
                     <div className='flex gap-[10px]'>
                        <img src="images/title-icon.svg" alt="" />
                         <p className="text-blue-500 font-semibold text-[18px]">GREAT WEB DEVELOPMENT SKILLS</p>
                     </div>
                  
                    <h1 className="md:text-4xl text-blue-950 text-2xl leading-[35px] md:leading-[50px] font-bold">Empowering Your Vision with 6+ Years of  <span className="text-blue-600 ">Web Development Expertise</span> </h1>
                    <p className="text-gray-500 text-[16px] leading-[30px] md:text-[18px] ">We’re passionate about helping businesses grow with powerful and 
                        engaging web solutions. Our team takes the time to understand your goals, offering transparent communication and expert guidance throughout the development process.</p>
                    
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex justify-between text-[18px] text-blue-950 font-semibold'>
                              <p>Discovery & Planning</p>
                              <p>85%</p>
                        </div>
                        <div className="w-full h-[10px] bg-white relative rounded-md flex items-center">
                            {/* Blue line */}
                             <div className="h-[50%] rounded-md bg-blue-500 w-1/2"></div> {/* Blue line takes 50% width */}
                            </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex justify-between text-[18px] text-blue-950 font-semibold'>
                              <p>Discovery & Planning</p>
                              <p>85%</p>
                        </div>
                        <div className="w-full h-[10px] bg-white relative rounded-md flex items-center">
                            {/* Blue line */}
                             <div className="h-[50%] bg-blue-500 rounded-md w-1/2"></div> {/* Blue line takes 50% width */}
                            </div>
                    </div>

                    
              </div>

              {/* img div */}
              <div className="w-full relative">
      
                   <img className="rounded-[30px] w-full" src="images/video-img.png" alt="Video Thumbnail" />
      
                       {/* Play Icon */}
                           <div className="absolute top-1/2 left-1/2 bg-white w-[70px] h-[70px] flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2">
                               <FaPlay size={20} color="blue" />
                            </div>
               </div>

      </div>
    </>
}


export default Vision ;