import { Link } from "react-router-dom";
function WebHeader()
{
    const symbol = '>';
    return <>
       <div data-aos="zoom-in" className="text-white w-full h-[280px] md:h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 data-aos="fade-up" className="md:text-5xl text-3xl mb-[20px] font-bold">Web Develoment</h1>
             <div data-aos="fade-down" className="flex text-[18px] md:text-xl gap-[10px]">
             <Link to="/">Home</Link>
                <p><span>{symbol}{symbol}</span></p>
                <p>Web Development</p>
             </div>
             
       </div>
    </>
}

export default WebHeader ;