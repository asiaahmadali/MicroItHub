import { FaCheck } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
function ServicesLeft()
{
    return <>
         <div className="flex flex-col gap-[30px]">
            {/* 1st box */}
                <div>
                    <img src="images/services-left.jpg" alt="" className="w-[90%] h-[500px] rounded-[10px]" />
                </div>
            {/* 2nd box */}
            <div className="flex flex-col gap-[30px]">
                  <h1 className="text-blue-950 font-bold text-4xl ">Software Development</h1>
                  <p className="text-gray-500 leading-[30px] text-[18px] ">At MicroITHub, our software development services focus on creating custom, high-quality solutions that align with your business goals and drive operational efficiency. We bring together a talented team of developers, designers, and strategists to ensure each project meets our clients unique requirements.
                  Heres how we approach software development:</p>
            </div>

            {/* 3rd box */}
            <div className='flex '>
                {/* rows div */}
                <div className='flex flex-col gap-[30px]'> 
                    <h1 className='text-2xl text-blue-950 font-bold'>We Serve The Best Work</h1>
                    <div className='flex flex-col gap-[25px]'>
                        {/* row1 */}
                      <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold">Customized Solutions:</p>
                             <p className="text-blue-950 text-[16px]">Tailored software to meet unique needs.</p>
                      </div>
                        {/* row2 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold">Agile Development Process:</p>
                             <p className="text-blue-950 text-[16px]">Flexible, iterative project phases.</p>
                        </div>
                        {/* row3 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold">Cutting-Edge Technology:</p>
                             <p className="text-blue-950 text-[16px]">Latest tech for reliable performance.</p>
                        </div>
                        {/* row4 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold">User Experience Focus:</p>
                             <p className="text-blue-950 text-[16px]">Intuitive and user-centered design.</p>
                        </div>
                        {/* row5 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold">Rigorous Quality Assurance:</p>
                             <p className="text-blue-950 text-[16px]">Comprehensive testing for reliability.</p>
                        </div>
                        {/* row6 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold"> Seamless Integration:</p>
                             <p className="text-blue-950 text-[16px]">Smoothly integrates with existing systems.</p>
                        </div>
                        {/* row6 */}
                        <div className="flex gap-[10px]">
                              <div className="w-5 h-5 bg-blue-600 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                             <p className="text-blue-950 text-[16px] font-semibold"> Post-Launch Support:</p>
                             <p className="text-blue-950 text-[16px]">Ongoing support and maintenance.</p>
                        </div>

                    </div>
                </div>
                {/* img div */}
                <div>
                      <img src="images/services-inner.jpg" alt="" className='w-[250px] rounded-[10px]' />
                </div>
               
            </div>
           
            
             {/*4rth para div */}
                <div>
                      <p className='text-gray-500 text-[18px] '>Our software development approach is designed to deliver robust, high-performing 
                        solutions that empower your business to excel in a competitive landscape.</p>

                        <div className='mt-[30px] flex flex-col gap-[30px]'>
                             <h1 className='text-blue-950 text-4xl font-bold'>Benefits With Our Service</h1>
                               <div className='flex gap-[20px]'>
                                     <div className='flex gap-[20px] shadow-sm shadow-gray-400 items-center h-[190px] border-[1px] p-[20px] w-[400px] rounded-[10px]'> 
                                            <div className='bg-blue-600 text-white shadow-lg shadow-blue-500 rounded-[10px] p-[20px] flex items-center justify-center'>
                                                <FaLightbulb className='text-5xl'></FaLightbulb>
                                            </div>
                                            <div className='flex flex-col gap-[5px]'>
                                                 <h1 className='text-blue-950 font-bold text-xl'>Scalable Solutions</h1>
                                                 <p className='text-[16px] text-gray-400'>Scalable, personalized solutions for your business.</p>
                                            </div>
                                     </div>

                                     <div className='flex gap-[20px] shadow-sm shadow-gray-400 items-center h-[190px] border-[1px] p-[20px] w-[400px] rounded-[10px]'> 
                                            <div className='bg-blue-600 text-white shadow-lg shadow-blue-500 rounded-[10px] p-[20px] flex items-center justify-center'>
                                                <FaHandsHelping className='text-5xl'></FaHandsHelping>
                                            </div>
                                            <div className='flex flex-col gap-[5px]'>
                                                 <h1 className='text-blue-950 font-bold text-xl'>24/7 Unlimited Support</h1>
                                                 <p className='text-[16px] text-gray-400'>Always available to assist you, ensuring your business operates smoothly around the clock.</p>
                                            </div>
                                     </div>
                               </div>
                        </div>
                </div>

            
            
         </div>
    </>
}


export default ServicesLeft ;