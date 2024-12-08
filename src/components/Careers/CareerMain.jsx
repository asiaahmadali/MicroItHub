import { FaCheckSquare } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

function CareerMain()
{
    return <>
       <div className=' h-[250px] md:h-[450px] flex flex-col md:p-[50px] p-[10px] mt-[60px] gap-[20px]'>
            <div  data-aos="zoom-in" className='flex text-white bg-blue-500 items-center text-xl font-semibold p-[10px] rounded-md gap-[10px] w-full'>
                   <FaCheckSquare></FaCheckSquare>
                   <p>Latest Jobs</p>
            </div>

            <div   data-aos="fade-right" className="border">
  
                <div className="flex justify-evenly bg-gray-100 text-[16px] md:text-xl font-bold p-[10px] md:p-[30px] text-center items-center">
                    <h1 className="w-1/3">Job Title</h1>
                    <h1 className="w-1/3">Last Date</h1>
                    <h1 className="w-1/3">Advertisement</h1>
                </div>


                <div className="flex justify-around text-center p-[10px] md:p-[25px] items-center text-gray-400">
                     <p className="w-1/3">Upwork & Fiverr Bidder Required</p>
                     <p className="w-1/3">30-11-2024</p>
                     < AiOutlineEye className='w-1/3 text-center text-2xl text-blue-500'></AiOutlineEye>
                </div>
            </div>

       </div>
    </>
}


export default CareerMain ;