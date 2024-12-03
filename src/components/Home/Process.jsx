import { FaCheck } from 'react-icons/fa';
 function Process()
 {
    return <>
        <div className="flex flex-col gap-[20px] pt-[70px] bg-cover bg-center" style={{ backgroundImage: "url('/images/process_bg_2.jpg')"}}>
             <div className="flex items-center justify-center gap-0">
                  <span className="w-[40px] h-0.5 bg-blue-500"></span>
                  <p className="text-blue-500  font-semibold mx-4">PROCESS</p>
                  <span className="w-[40px] h-0.5 bg-blue-500"></span>
              </div>
            

               <div>
                    <p className="text-4xl text-blue-950 font-bold text-center">Our Work Process</p>
               </div>

               {/* process content */}

               <div className="flex md:flex-row flex-col rounded-[30px] gap-[30px] bg-white m-[10px] p-[50px] ">
                {/* 1st div */}
               <div className="flex flex-col gap-[20px]">
                     <div className="flex gap-[20px]">
                         <button className="text-white w-[120px] text-[18xl] bg-blue-500 rounded-[50px] py-[10px] font-semibold px-[20px]">Step-01</button>
                         <button className="text-white w-[280px] md:w-[300px] text-xl bg-blue-500 rounded-[50px] py-[20px] font-semibold px-[120px]">Discovery</button>
                     </div>

                     <div className="flex gap-[20px]">
                         <button className="text-blue-950 w-[120px] border text-[18xl] bg-white rounded-[50px] py-[10px] font-semibold px-[20px]">Step-02</button>
                         <button className="text-blue-950 border w-[280px] md:w-[300px] text-xl bg-white rounded-[50px] py-[20px] font-semibold px-[120px]">Planning</button>
                     </div>

                     <div className="flex gap-[20px]">
                         <button className="text-blue-950 w-[120px] border text-[18xl] bg-white rounded-[50px] py-[10px] font-semibold px-[20px]">Step-03</button>
                         <button className="text-blue-950 border w-[280px] md:w-[300px] text-xl bg-white rounded-[50px] py-[20px] font-semibold px-[120px]">Execute</button>
                     </div>

                     <div className="flex gap-[20px]">
                         <button className=" text-blue-950 border w-[120px] text-[18xl] bg-white rounded-[50px] py-[10px] font-semibold px-[20px]">Step-04</button>
                         <button className="text-blue-950 border  w-[280px] md:w-[300px] text-xl bg-white rounded-[50px] py-[20px] font-semibold px-[80px]">Finished Work</button>
                     </div>

               </div>

                  {/* 2nd div */}
                   <div className='w-[350px] flex flex-col gap-[40px] border-l-[1px] border-l-gray-200 pl-[30px]'>
                        <h1 className='text-blue-950 font-semibold text-2xl leading-[30px]'>Building the Right Solution from the Start</h1>
                        <p className='text-gray-400 leading-[30px]'>At MicroITHub, our Discovery process is designed to fully understand your
                             vision, business needs, and project goals,
                             ensuring we build the most effective solution for you. 
                             Here’s how we approach it:
                        </p>

                        <div className='flex flex-col gap-[10px]'>
                               <div className='flex items-center gap-[10px]'>
                                    <div className='border rounded-full p-[5px] w-[30px] h-[30px] flex items-center justify-center'>
                                       <FaCheck className='text-gray-300 text-[18px]'></FaCheck>
                                    </div>
                                    <p className='text-blue-950 text-[16px] font-semibold'>Understanding Your Vision</p>        
                               </div>

                               <div className='flex items-center gap-[10px]'>
                                    <div className='border rounded-full p-[5px] w-[30px] h-[30px] flex items-center justify-center'>
                                       <FaCheck className='text-gray-300 text-2xl'></FaCheck>
                                    </div>
                                    <p className='text-blue-950 text-[16px] font-semibold'>User and Market Research</p>        
                               </div>

                               <div className='flex items-center gap-[10px]'>
                                    <div className='border rounded-full p-[5px] w-[30px] h-[30px] flex items-center justify-center'>
                                       <FaCheck className='text-gray-300 text-2xl'></FaCheck>
                                    </div>
                                    <p className='text-blue-950 text-[16px] font-semibold'>Requirements Gathering</p>        
                               </div>

                               <div className='flex items-center gap-[10px]'>
                                    <div className='border rounded-full p-[5px] w-[30px] h-[30px] flex items-center justify-center'>
                                       <FaCheck className='text-gray-300 text-2xl'></FaCheck>
                                    </div>
                                    <p className='text-blue-950 text-[16px] font-semibold'>Feasibility Assessment</p>        
                               </div>

                               <div className='flex items-center gap-[10px]'>
                                    <div className='border rounded-full p-[5px] w-[30px] h-[30px] flex items-center justify-center'>
                                       <FaCheck className='text-gray-300 text-2xl'></FaCheck>
                                    </div>
                                    <p className='text-blue-950 text-[16px] font-semibold'>Defining Project Scope</p>        
                               </div>

                        </div>
                   </div>

                   {/* 3rd div */}
                   <div>
                       <img src="images/process-img.jpg" alt="" className='w-[350px] rounded-[30px]' />
                   </div>
               </div>
        </div>
    </>
 }



 export default Process ;