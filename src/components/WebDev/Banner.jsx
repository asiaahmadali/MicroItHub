import { useEffect } from 'react';
import AOS from 'aos';
import { CountUp } from 'countup.js';
import 'aos/dist/aos.css'; // Don't forget to import AOS styles

function Banner() {
    useEffect(() => {
        // Initialize AOS library
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Trigger animation only once
        });

        // Set up CountUp animation
        const counters = document.querySelectorAll('.counter');
        const handleScroll = () => {
            counters.forEach(counter => {
                const rect = counter.getBoundingClientRect();
                // If the element is in the viewport, start the CountUp animation
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    if (!counter.classList.contains('counted')) {
                        const countUp = new CountUp(counter, parseInt(counter.dataset.count), {
                            startVal: 0,
                            duration: 2, // Duration for the count-up
                            useEasing: true,
                            useGrouping: true,
                            separator: ',',
                        });
                        countUp.start();
                        counter.classList.add('counted'); // Prevent multiple triggers
                    }
                }
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check once on page load in case elements are already in view

        // Cleanup the event listener when component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg-blue-600 grid grid-cols-2 place-items-center md:grid-cols-4 gap-[20px] overflow-hidden md:gap-[50px] h-auto md:h-[300px] p-[10px] md:p-[50px] items-center justify-between bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/images/banner-bg.png')" }}>

                {/* First div */}
                <div data-aos="fade-right" className="flex md:flex-row flex-col gap-[15px]">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-1.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl text-white font-bold counter" data-count="986">0</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Finished Project</p>
                    </div>
                </div>

                {/* Second div */}
                <div data-aos="fade-left" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-2.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl text-white font-bold counter" data-count="896">0</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Happy Clients</p>
                    </div>
                </div>

                {/* Third div */}
                <div data-aos="fade-right" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-3.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl text-white font-bold counter" data-count="396+">0</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Skilled Experts</p>
                    </div>
                </div>

                {/* Fourth div */}
                <div data-aos="fade-left" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[25px] md:p-[20px]">
                        <img src="images/banner-icon-4.svg" className="w-auto h-auto" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl text-white font-bold counter" data-count="496+">0</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Honorable Awards</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Banner;
