import { FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
function AboutMain() {
     const [count, setCount] = useState(1);

  useEffect(() => {
    // Increment the number every 0.4 second, up to 4
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 400);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row p-[50px] md:p-[100px] gap-[50px]">
        {/* about img */}
        <div className=" w-full md:w-1/2 relative">
          <img src="images/about-img.png" alt="" className="w-full" />

          {/* Circular Experience Badge */}
          <div className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px]  bottom-4 right-[10px] bg-white text-white rounded-full flex items-center justify-center">
              <div className='bg-blue-500 rounded-full w-[80%] h-[80%] flex flex-col items-center justify-center'>
                  <p className='md:text-6xl text-xl font-bold'>{count}</p>
                  <p className='md:text-[18px] text-[12px] font-semibold'>Years Experience</p>
            </div>
          </div>
        </div>

        {/* about main content */}
        <div className=" w-full md:w-1/2">
          {/* about logo */}
          <div>
            <img src="images/" alt="" className="" />
            <p className="text-blue-500 text-xl md:text-2xl font-bold">ABOUT US</p>
          </div>

          <p className="md:text-4xl text-2xl font-bold leading-[30px] md:leading-[45px] mt-4 mb-4 text-gray-900">
            Unlocking New Business Opportunities With <span className="text-blue-500">Smart IT Solutions</span>
          </p>
          <p className="md:text-[18px] text-[15px] mt-[30px] text-gray-600 leading-[30px] mb-[30px]">
            Microithub provides tailored software solutions that drive business success. We specialize in custom IT services designed to streamline processes, boost efficiency, and foster growth. Let’s make technology work smarter for you!
          </p>

          {/* company certificate and team */}
          <div className="mt-[20px] flex flex-col md:flex-row gap-[20px] justify-between pb-[30px] border-b-[2px]">
            {/* div1 */}
            <div className="flex gap-[10px]">
              <img src="images/certificate-icon.png" alt="" className="w-[40px]" />
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-bold text-xl">Certified Company</h1>
                <p className="text-[16px] text-gray-500">Best Provide Skills Services</p>
              </div>
            </div>
            {/* div 2 */}
            <div className="flex gap-[10px]">
              <img src="images/expert-team.png" alt="" className="w-[40px]" />
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-bold text-xl">Expert Team</h1>
                <p className="text-[16px] text-gray-500">100% Expert Team</p>
              </div>
            </div>
          </div>

          {/* contact no */}
          <div className="mt-[30px] flex md:flex-row flex-col gap-[20px] justify-between">
            {/* div1 */}
            <div className="flex gap-[10px]">
              <div className="bg-blue-600 rounded-full p-[17px] md:p-[15px]">
                <FaPhone className="text-white text-xl md:text-4xl" />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[16px] text-gray-500 font-medium">Call Us On:</p>
                <p className="font-bold">+130-7291-4613</p>
              </div>
            </div>
            {/* div 2 */}
            <div className="flex gap-[10px]">
              <div className="bg-blue-600 rounded-full p-[17px] md:p-[15px]">
                <FaPhone className="text-white text-xl md:text-4xl" />
              </div>

              <div className="flex flex-col gap-[5px]">
                <p className="text-[16px] text-gray-500 font-medium">Call Us On:</p>
                <p className="font-bold">+92329-5331-837</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMain;
