import { Link } from "react-router-dom";
function ContactHeader()
{
    const symbol = '>';
    return <>
         <div data-aos="zoom-in" className="text-white w-full h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 data-aos="fade-up"className="text-5xl mb-[20px] font-bold">Contact Us</h1>
             <div data-aos="fade-down" className="flex text-xl gap-[10px]">
             <Link to="/">Home</Link>
                <p><span>{symbol}{symbol}</span></p>
                <p>Contact Us</p>
             </div>
             
       </div>
    </>
}


export default ContactHeader ;