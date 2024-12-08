import { FaCheck } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
function AppLeft()
{
    return <>
         <div className="flex flex-col gap-[30px]">
            {/* 1st box */}
                <div data-aos="zoom-in">
                    <img src="images/services-left.jpg" alt="" className="md:w-[90%] w-full h-[320px] md:h-[500px] rounded-[10px]" />
                </div>
            {/* 2nd box */}
            <div className="flex flex-col gap-[30px]" data-aos="fade-right">
                  <h1 className="text-blue-950 font-bold  text-2xl md:text-4xl ">Mobile Application Development Services by MicroITHub</h1>
                  <p className="text-gray-500 leading-[25px] md:leading-[30px] text-[14px] md:text-[18px] ">At MicroITHub, we bring your app ideas to life with robust, user-friendly, and innovative mobile solutions. With six years of experience in mobile app development, we understand the unique needs of today’s mobile-first market and specialize in creating high-quality
                     applications that captivate users and drive business growth.</p>
            </div>

            {/* 3rd box */}
           
                <div className='flex flex-col gap-[30px]'> 
                    <h1 data-aos="fade-right" className='text-2xl text-blue-950 font-bold'>Our mobile application development services include:</h1>
                    <div className='flex flex-col gap-[25px]'>
                        {/* row1 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold">Custom App Development:</p>

                          </div>
                              
                             <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">We develop tailor-made applications that align with your brand and business objectives, whether you need a sleek consumer-facing app or a complex enterprise solution.</p>
                      
                      </div>
                             
                     
                        {/* row2 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold"> iOS and Android Development:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">MicroITHub creates native and cross-platform apps that perform seamlessly on both iOS and Android,
                             ensuring a consistent user experience across devices.</p>                     
                      </div>

                         {/* row3 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold"> Cross-Platform Solutions:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">We use frameworks like Flutter and React Native to build cross-platform applications, offering cost-effective
                             solutions that deliver native performance on all major mobile operating systems</p>                     
                      </div>
                        {/* row4 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold"> UI/UX Design:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">Our design team focuses on creating intuitive, engaging, and visually appealing interfaces. We emphasize a 
                            smooth and responsive user experience to keep users engaged and satisfied.
                            </p>                     
                      </div>
                         {/* row5 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold"> 
                              App Testing & Quality Assurance:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">We conduct rigorous testing to ensure your app is free of bugs and works 
                            smoothly on all devices, providing users with a flawless experience.
                            </p>                     
                      </div>
                         {/* row6 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold">
                              Integration Services:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">From payment gateways to social media integration, we connect your app with the tools and services 
                            that maximize its functionality and enhance the user experience.
                            </p>                     
                      </div>
                         {/* row7 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold">
                              App Maintenance & Support:</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">MicroITHub provides ongoing support and updates to keep your app secure and fully optimized. We ensure it
                             adapts to new OS versions, user feedback, and evolving business needs.
                            </p>                     
                      </div>

                      {/* row8 */}
                      <div data-aos="fade-right" className="flex flex-col gap-[10px] ">
                          <div className='flex gap-[10px]'>
                              <div className="w-5 h-5 bg-gray-500 flex items-center justify-center clip-path-hexagon">
                                  <FaCheck className="text-white text-[12px]" />
                              </div>
                              <p className="text-gray-500 text-[13px] md:text-[16px] font-semibold">
                              App Store Optimization (ASO):</p>

                          </div>   
                           <p className="text-gray-500 opacity-[80%] text-[13px] md:text-[16px]">We help your app stand out in crowded app stores
                             with ASO strategies that improve visibility and attract more downloads.
                            </p>                     
                      </div>

                    </div>
                </div>

           
            
             {/*4rth para div */}
                <div>
                      <p className='text-gray-500  text-[16px] leading-[25px] md:leading-[30px] md:text-[18px] '>Our commitment to quality, timely delivery, and transparent communication sets us apart. At MicroITHub, we focus on turning your vision into a reality, 
                        creating mobile applications that not only meet but exceed user expectations.</p>

                        <div className='mt-[30px] flex flex-col gap-[30px]'>
                             <h1 className='text-blue-950 text-2xl md:text-4xl font-bold'>Benefits With Our Service</h1>
                               <div className='flex gap-[20px] md:flex-row flex-col '>
                                     <div data-aos="fade-up" className='flex md:flex-row flex-col  gap-[20px] shadow-sm shadow-gray-400 items-center h-[250px] md:h-[190px] border-[1px] p-[30px] md:p-[20px] w-auto md:w-[400px] rounded-[10px]'> 
                                            <div className='bg-blue-600 text-white shadow-lg shadow-blue-500 rounded-[10px] p-[20px] flex items-center justify-center'>
                                                <FaLightbulb className='md:text-5xl text-2xl'></FaLightbulb>
                                            </div>
                                            <div className='flex flex-col items-center md:items-start gap-[5px]'>
                                                 <h1 className='text-blue-950 font-bold text-xl'>Scalable Solutions</h1>
                                                 <p className='text-[16px] text-gray-400 md:text-start text-center'>Scalable, personalized solutions for your business.</p>
                                            </div>
                                     </div>

                                     <div data-aos="fade-down" className='flex md:flex-row flex-col  gap-[20px] shadow-sm shadow-gray-400 items-center h-[250px] md:h-[190px] border-[1px] p-[30px] md:p-[20px] w-auto md:w-[400px] rounded-[10px]'> 
                                            <div className='bg-blue-600 text-white shadow-lg shadow-blue-500 rounded-[10px] p-[20px] flex items-center justify-center'>
                                                <FaHandsHelping className=' text-2xl md:text-5xl'></FaHandsHelping>
                                            </div>
                                            <div className='flex flex-col items-center md:items-start gap-[5px]'>
                                                 <h1 className='text-blue-950 font-bold text-xl'>24/7 Unlimited Support</h1>
                                                 <p className='text-[16px] text-gray-400 md:text-start text-center'>Always available to assist you, ensuring your business operates smoothly around the clock.</p>
                                            </div>
                                     </div>
                               </div>
                        </div>
                </div>

            
            
         </div>
    </>
}


export default AppLeft ;