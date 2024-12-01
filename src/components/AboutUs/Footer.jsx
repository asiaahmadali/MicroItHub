import { FaFacebook, FaLinkedin } from 'react-icons/fa'; 

function Footer()
{
    return <>
       <div className="flex md:flex-row flex-col justify-between bg-gray-900 p-[5px] h-auto md:h-[100px] text-white items-center">
           <p className='text-[16px] md:text-[18px] pl-4'>Copyright &copy; 2024 <span className="text-blue-500 font-bold ">MicroItHub</span>. All Rights Reserved.</p>
              {/* social media icons */}
           <div className='flex pr-4 gap-[10px]'>
                <div className='bg-gray-500 rounded-full p-[10px] hover:text-gray-500 hover:bg-blue-600'>
                    <FaFacebook className='text-xl'></FaFacebook>
                </div>

                <div className='bg-gray-500 rounded-full p-[10px] hover:text-gray-500 hover:bg-blue-600'>
                   <FaLinkedin className='text-xl'></FaLinkedin>
                </div>
           </div>
       </div>
    </>
}

export default Footer ;