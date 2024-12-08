import { FaPhoneAlt } from 'react-icons/fa';

function MoreInfo()
{
    return <>
      <div className="bg-blue-600 text-white m-[20px] rounded-[30px] flex md:flex-row flex-col gap-[20px] justify-between md:justify-evenly p-[40px] items-center">
             <div className='p-[20px] text-xl rounded-full border-[8px] border-blue-300 bg-blue-400 hover:bg-black'>
                  <FaPhoneAlt></FaPhoneAlt>
              </div> 

             <div className="flex flex-col gap-[10px]">
                 <p className="md:text-[18px] text-[16px]">Call For More Info</p>
                 <h1 className=" text-xl md:text-3xl font-bold">(+13)072914613</h1>
                 <h1 className="text-xl md:text-3xl font-bold">(+92)3295331837</h1>
             </div>

             <div className="md:w-[300px] md:text-3xl text-[18px] leading-[30px] md:leading-[40px] font-bold">
                 <h1>Request your free 
                  consultation today and discover how our IT solutions can 
                  drive your business forward</h1>
             </div>

             <div>
                 <button className="border-blue-300 hover:bg-black  border-[1px] font-semibold bg-blue-500 px-[30px] py-[10px] rounded-[30px]">CONTACT US</button>
             </div>
      </div>
    </>
}


export default MoreInfo ;