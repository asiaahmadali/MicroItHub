function Banner() {
    return (
        <>
            <div className="bg-blue-600 grid grid-cols-2 place-items-center md:grid-cols-4 gap-[20px] overflow-hidden md:gap-[50px] h-auto md:h-[300px] p-[10px] md:p-[50px] items-center justify-between bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/images/banner-bg.png')" }}>

                {/* First div */}
                <div  data-aos="fade-right" className="flex md:flex-row flex-col gap-[15px]">
                    <div className="bg-white flex items-center  rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-1.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl  text-white font-bold">986+</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Finished Project</p>
                    </div>
                </div>

                {/* Second div */}
                <div  data-aos="fade-left" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-2.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl  text-white font-bold">896+</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Happy Clients</p>
                    </div>
                </div>

                {/* Third div */}
                <div  data-aos="fade-right" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[20px]">
                        <img src="images/banner-icon-3.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl  text-white font-bold">396+</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Skilled Experts</p>
                    </div>
                </div>

                {/* Fourth div */}
                <div  data-aos="fade-left" className="flex gap-[15px] md:flex-row flex-col">
                    <div className="bg-white flex items-center rounded-full justify-center border-[10px] border-gray-200 p-[25px] md:p-[20px]">
                        <img src="images/banner-icon-4.svg" className="w-auto h-auto" alt="" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="md:text-5xl text-3xl  text-white font-bold">496+</p>
                        <p className="text-white font-semibold text-[16px] md:text-[18px]">Honorable Awards</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Banner;
