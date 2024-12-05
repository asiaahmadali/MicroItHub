import { FaCheck} from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

function WebDevIntro()
{
    return <>
      <div className="flex md:flex-row flex-col p-[20px] md:p-[50px] items-center gap-[50px]">
              {/* img div */}
              <div className="md:w-1/2 w-full">
                    <img className="rounded-[30px]" src="images/web-dev.jpg" alt="" />
              </div>

              {/* intro text */}
              <div className="md:w-1/2 w-full flex flex-col gap-[30px]">
                    <p className="text-blue-500 font-semibold text-[18px]"> WEB DEVELOPMENT</p>
                    <h1 className="md:text-4xl text-blue-950 text-2xl leading-[35px] md:leading-[50px] font-bold">Trust MicroITHub for Innovative, Reliable, and Results-Driven  <span className="text-blue-600 ">Web Solutions</span> </h1>
                    <p className="text-gray-500 text-[16px] leading-[30px] md:text-[18px] ">At MicroITHub, we specialize in creating high-quality, custom web solutions tailored to meet the unique needs of every business. With six years of experience in web and mobile app development, we combine technical expertise with a deep understanding of industry trends to deliver engaging, reliable,
                         and scalable websites that help our clients achieve their goals.</p>

                         {/* services rows div */}
                         <div className='flex flex-col gap-[20px]'>
                            {/* service 1 */}
                               <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>Custom Website Development</p>
                               </div>

                               {/* service 2 */}
                               <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>E-commerce Solutions</p>
                               </div>

                               {/* service 3 */}
                               <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>Content Management Systems (CMS)</p>
                               </div>

                               {/* service 4 */}
                               <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>Responsive Design</p>
                               </div>

                                {/* service 5 */}
                                <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>Web Application Development</p>
                               </div>

                                {/* service 6 */}
                                <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>SEO Optimization</p>
                               </div>

                                {/* service 7*/}
                                <div className='flex gap-[10px] items-center'>
                                   <div className='bg-blue-500 rounded-md p-[4px] flex items-center justify-center text-white'>
                                       <FaCheck></FaCheck>
                                   </div>
                                   <p className='text-gray-500 text-[16px] font-semibold'>Maintenance & Support</p>
                               </div>
                            
                         </div>

                    {/* button */}
                  <button className='text-white w-[170px]  hover:bg-blue-950 hover:cursor-pointer rounded-[10px] text-[18px]  font-semibold p-[15px] flex gap-[5px] bg-blue-600 items-center justify-center'>
                      <p>Get a Quote</p>
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                 </button>
              </div>
      </div>
    </>
}


export default WebDevIntro ;