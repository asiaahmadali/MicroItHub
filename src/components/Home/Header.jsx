import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper's CSS

import { FaStar } from 'react-icons/fa';

function Header() {
    const swiperRef = useRef(null); // Reference to Swiper instance

    useEffect(() => {
        // Set interval to change slide every 2.5 seconds
        const interval = setInterval(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.slideNext(); // Trigger slide to the next
            }
        }, 2500); // Interval in ms (2.5 seconds per slide)

        // Clear the interval when the component is unmounted to avoid memory leaks
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <>
            <div
                style={{ backgroundImage: "url('/images/hero_bg_2.jpg')" }}
                className="flex w-full bg-cover bg-no-repeat bg-center flex-col justify-between mb-[20px] md:mb-[50px] h-auto bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white pt-[50px] md:pt-[100px]"
            >
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Text Content Section*/}
                    <div className="flex flex-col justify-center items-start w-full md:w-3/4 px-10 space-y-6 z-10 pb-[20px] md:pb-[100px]">
                        <p data-aos="fade-right" className="md:text-xl text-[18px] tracking-wide text-purple-400">WE DREAM | WE DESIGN | WE DEVELOP | WE DELIVER</p>
                        <p className="md:text-8xl text-xl font-semibold text-shadow-md leading-[50px] md:leading-[110px]">
                            Transforming <span className="text-green-600 border-green-400 border-[2px]" data-aos="fade-right">IDEAS</span> into Software, Web, and Apps
                        </p>

                        <div className="flex md:flex-row flex-col justify-between gap-[10px] md:gap-[100px]">
                            {/* button */}
                            <button className="bg-blue-500 text-white font-normal h-[50px] md:h-[60px] w-[200px] md:font-semibold text-[16px] md:text-[18px] p-[15px] md:py-4 md:px-8 rounded-[50px] hover:bg-blue-600 transition duration-300 ease-in-out">
                                Get Started Now
                            </button>

                            {/* rating */}
                            <div className="relative text-[18px] flex items-center justify-center gap-[10px] top-[10px] md:top-[60px] ">
                                <div data-aos="fade-right" className='relative bottom-[50px]'>
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
                    <div className="" data-aos="zoom-in">
                        <img
                            className="md:h-[700px] h-[400px] w-full md:w-[800px] object-cover p-[10px] rounded-[20px] "
                            src="./images/intro.jpg"
                            alt="Header Image"
                        />
                    </div>
                </div>

                {/* Slider Div with Swiper */}
                <div className="mt-[50px] w-[70%] flex items-center justify-center">
    <Swiper
        ref={swiperRef} // Attach swiper instance to the ref
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Only 1 slide per view
        loop={true} // Enable looping of slides
        speed={1500} // Speed of transition (1.5 seconds)
        className="bg-gray-200 p-[30px] sharp-top-right"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          900: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
    >
        {/* SwiperSlide for each section */}
        <SwiperSlide>
            <div className='flex gap-[10px] items-center justify-center'>
                <img src="images/leaf-3.svg" alt="" />
                <h1 className='font-poppins text-2xl font-bold text-gray-400'>MakeLess</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex gap-[10px] items-center justify-center'>
                <img src="images/leaf-icon.svg" alt="" />
                <h1 className='text-2xl font-bold text-gray-400'>greener</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex gap-[10px] items-center justify-center'>
                <img src="images/leaf-2.svg" alt="" />
                <h1 className='font-roboto text-2xl font-bold text-gray-400'>CoWorks</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='flex gap-[10px] items-center justify-center'>
                <img src="images/leaf-4.svg" alt="" />
                <h1 className='font-poppins text-2xl font-bold text-gray-400'>DorFus</h1>
            </div>
        </SwiperSlide>
    </Swiper>
</div>

            </div>
        </>
    );
}

export default Header;
