import { FaCheck } from 'react-icons/fa';

function ServicesDetails() {
    return (
        <>
            <div 
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(1, 1,1, 0.6), rgba(0, 0, 0, 0.6)), url('/images/services-details-bg.jpg')", // Gradient from light to dark overlay
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    position: "relative", // To position the cut-out corners
                     // Outer border radius for the div
                }} 
                className='flex md:p-[100px] p-[30px] flex-col items-center justify-center bg-no-repeat'
            >
                {/* Inner corner cuts with blue background */}
                <div 
                    style={{
                        content: "''",
                        position: "absolute",
                        top: "0", left: "0", right: "0", bottom: "0",
                        pointerEvents: "none", // To prevent interaction with the pseudo-elements
                    }} 
                >
                    {/* Top-left sharp blue corner */}
                    <div 
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            backgroundColor: "blue",
                            clipPath: "polygon(100% 0, 0 0, 0 100%)", // Triangle shape
                        }}
                         className='md:w-[200px] md:h-[200px] w-[70px] h-[70px]'
                    ></div>

                    {/* Top-right sharp blue corner */}
                    <div 
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            backgroundColor: "blue",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%)", // Triangle shape
                        }}
                        className='md:w-[200px] md:h-[200px] w-[70px] h-[70px]'
                    ></div>

                    {/* Bottom-left sharp blue corner */}
                    <div 
                        style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            backgroundColor: "blue",
                            clipPath: "polygon(100% 100%, 0 100%, 0 0)", // Triangle shape
                        }}
                         className='md:w-[200px] md:h-[200px] w-[70px] h-[70px]'
                    ></div>

                    {/* Bottom-right sharp blue corner */}
                    <div 
                        style={{
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            backgroundColor: "blue",
                            clipPath: "polygon(0 100%, 100% 100%, 100% 0)", // Triangle shape
                        }}
                         className='md:w-[200px] md:h-[200px] w-[70px] h-[70px]'
                    ></div>
                </div>

                <div className='flex flex-col gap-[30px]'> 
                    <h1 className='md:text-3xl text-2xl text-white mt-[20px] md:mt-[50px] font-bold'>Our web development services details</h1>
                    <div className='flex flex-col gap-[25px]'>
                        {/* row1 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">Custom Website Development:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                We develop tailor-made applications that align with your brand and business objectives, whether you need a sleek consumer-facing app or a complex enterprise solution.
                            </p>
                        </div>

                        {/* row2 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">E-commerce Solutions:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                We build secure and feature-rich e-commerce platforms that drive sales and enhance customer engagement. Our e-commerce sites are designed to handle high traffic, manage inventory efficiently, and provide a smooth shopping experience.
                            </p>
                        </div>

                        {/* row3 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">Content Management Systems (CMS):</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                MicroITHub offers CMS solutions that empower you to manage your content easily. We create flexible and customizable CMS platforms that simplify updating and scaling your site as your business grows.
                            </p>
                        </div>

                        {/* row4 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">Responsive Design:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                We prioritize responsive, mobile-friendly design, ensuring your website looks and functions perfectly on all devices, from desktops to tablets and smartphones.
                            </p>
                        </div>

                        {/* row5 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">Web Application Development:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                Whether you need a SaaS product or a custom web app, we build applications that are robust, scalable, and crafted for user convenience.
                            </p>
                        </div>

                        {/* row6 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">SEO Optimization:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                Our development approach includes SEO best practices, helping your site rank higher on search engines and attract more organic traffic.
                            </p>
                        </div>

                        {/* row7 */}
                        <div data-aos="zoom-in" className="flex flex-col gap-[10px] ">
                            <div className='flex gap-[10px]'>
                                <div className="w-5 h-5 bg-white flex items-center justify-center clip-path-hexagon">
                                    <FaCheck className="text-gray-400 text-[12px]" />
                                </div>
                                <p className="text-white text-[13px] md:text-[16px] font-semibold">Maintenance & Support:</p>
                            </div>

                            <p className="text-white text-[13px] md:text-[16px]">
                                We provide ongoing support and maintenance to keep your website running smoothly, with updates, troubleshooting, and performance optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesDetails;
