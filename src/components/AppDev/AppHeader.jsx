import { Link } from "react-router-dom";
function AppHeader()
{
    const symbol = '>';
    return <>
       <div className="text-white w-full h-[280px] md:h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 className="md:text-5xl text-3xl mb-[20px] font-bold">Mobile Application Develoment</h1>
             <div className="flex text-[18px] md:text-xl gap-[10px]">
             <Link to="/">Home</Link>
                <p><span>{symbol}{symbol}</span></p>
                <p>Mobile Application Development</p>
             </div>
             
       </div>
    </>
}

export default AppHeader ;