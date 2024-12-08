import { Link } from "react-router-dom";
function SDevHeader()
{
    const symbol = '>';
    return <>
       <div className="text-white w-full h-[280px] md:h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 className="md:text-5xl text-3xl mb-[20px] font-bold">Software Develoment</h1>
             <div className="flex text-[18px] md:text-xl gap-[10px]">
             <Link to="/">Home</Link>
                <p><span>{symbol}{symbol}</span></p>
                <p>Services Details</p>
             </div>
             
       </div>
    </>
}

export default SDevHeader ;