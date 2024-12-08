
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function AboutHeader()
{
    
    return <>
       <div data-aos="zoom-in" className="text-white w-full h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 data-aos="fade-up" className="text-5xl mb-[20px] font-bold">About Us</h1>
             <div data-aos="fade-down" className="flex text-xl items-center  gap-[10px]">
               <Link to="/">Home</Link>
               
                 <div className='flex gap-[0px] text-[12px]'>
                      <FaGreaterThan></FaGreaterThan>
                      <FaGreaterThan></FaGreaterThan>
                 </div>
                <p>About Us</p>
             </div>
             
       </div>
    </>
}

export default AboutHeader ;