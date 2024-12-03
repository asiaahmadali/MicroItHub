import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

function Servicecard(Props) {
  return (
    <>
      <div className="w-[300px] flex flex-col gap-[20px] p-[15px] md:p-[25px] shadow-lg bg-white rounded-tl-lg rounded-br-[50px] rounded-bl-lg border-t-4 border-blue-400 relative group overflow-hidden">
        
        {/* Top blue line */}
        <h1 className="text-blue-950 text-xl md:text-2xl font-semibold group-hover:text-white transition-colors duration-300 z-10">{Props.head}</h1>
        
        {/* Description */}
        <p className="text-gray-400 text-[16px] md:text-[18px] mb-[60px] group-hover:text-white transition-colors duration-300 z-10">{Props.para}</p>
        
        {/* Link and arrow positioned 20px from the bottom */}
        <div className="absolute bottom-[20px] left-[20px] flex items-center text-blue-700 gap-[5px] text-[16px] font-semibold group-hover:text-white transition-colors duration-300 z-10">
          <Link className="flex items-center gap-[5px] border-b-[1px] border-b-blue-500 group-hover:border-b-white">
            <p>{Props.link}</p>
            <FaArrowRight />
          </Link>
        </div>

        {/* Blue hover effect with opacity */}
        <div className="absolute bottom-0 left-0 right-0 h-0 bg-blue-700  group-hover:h-[100%]  transition-all duration-500 z-0"></div>
      </div>
    </>
  );
}

export default Servicecard;
