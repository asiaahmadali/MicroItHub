// import { useEffect, useState } from 'react';

function ChooseUs() {
  
  return (
    <>
      <div className='md:p-[50px] p-[20px] mt-[40px]'>
        <div className="flex justify-between md:flex-row flex-col gap-[20px]">
          <div>
            <p className="text-blue-500 font-semibold text-[16px] mb-[10px]">WHY CHOOSE US</p>
            <h1  data-aos="fade-right" className="md:text-3xl text-2xl leading-[30px] md:leading-[40px] w-[auto] md:w-[500px] text-blue-950 font-bold">
              Microithub: Empowering Your Business with Leading-Edge Software and Expertise in Digital Excellence
            </h1>
          </div>

          {/* circles div */}
          <div className="flex gap-[20px]">
               <div  data-aos="fade-up" className="p-[20px] md:w-[170px] w-[100px] h-[100px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center ">
                     <h1 className="md:text-5xl text-3xl  text-blue-950 font-bold">96%</h1>
                     <p className="md:text-[16px] text-[14px] text-blue-950">Team Members</p>
               </div>

               <div  data-aos="fade-down" className="p-[10px] md:w-[170px] w-[100px] h-[100px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center ">
                     <h1 className="md:text-5xl text-3xl  text-blue-950 font-bold">95%</h1>
                     <p className="md:text-[16px] text-[14px] text-blue-950 text-center">Complete Projects</p>
               </div>

               <div  data-aos="fade-up" className="p-[10px] md:w-[170px] w-[100px] h-[100px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center ">
                     <h1 className="md:text-5xl text-3xl  text-blue-950 font-bold">80%</h1>
                     <p className="md:text-[16px] text-[14px] text-blue-950">Winning Awards</p>
               </div>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
