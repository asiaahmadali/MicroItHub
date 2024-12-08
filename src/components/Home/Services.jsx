import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper's CSS

import Servicecard from "./Service-Card";

function Services() {
    const swiperRef = useRef(null); // Reference to Swiper instance

    const h1 = "Software Development";
    const h2 = "Web Development";
    const h3 = "Mobile Application Development";
    const h4 = "Game Development";

    const p1 = "Building next generation software solutions to power your business and drive innovation";
    const p2 = "Crafting dynamic web experiences to elevate your brand and accelerate growth";
    const p3 = "Designing powerful mobile apps that engage users and drive business success";
    const p4 = "Creating immersive game experiences that captivate players and bring stories to life";

    const linkcontent = "Learn More";

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
        <div className="md:mb-[100px] mb-[30px]">
            <div className="flex items-center justify-center gap-0">
                <span className="w-[40px] h-0.5 bg-blue-500"></span>
                <p className="text-blue-500 font-semibold mx-4">OUR SERVICES</p>
                <span className="w-[40px] h-0.5 bg-blue-500"></span>
            </div>

            <div className="flex items-center justify-center mt-[20px] mb-[20px]">
                <h1 className="text-center w-[550px] text-blue-950 text-2xl md:text-4xl font-bold">
                    We provide All-in-one Solution for every IT job
                </h1>
            </div>

            {/* Swiper Slider */}
            <Swiper
                ref={swiperRef} // Attach swiper instance to the ref
                spaceBetween={30}  // Space between slides
                slidesPerView={1}  // Only 1 slide per view
                loop={true}  // Enable looping of slides
                speed={1500} // Speed of transition (1.5 seconds)
                className="w-full"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1100: { slidesPerView: 4 },
                  }}
            >
                {/* SwiperSlide for each Servicecard */}
                <SwiperSlide>
                    <Servicecard head={h1} para={p1} link={linkcontent} />
                </SwiperSlide>
                <SwiperSlide>
                    <Servicecard head={h2} para={p2} link={linkcontent} />
                </SwiperSlide>
                <SwiperSlide>
                    <Servicecard head={h3} para={p3} link={linkcontent} />
                </SwiperSlide>
                <SwiperSlide>
                    <Servicecard head={h4} para={p4} link={linkcontent} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Services;
