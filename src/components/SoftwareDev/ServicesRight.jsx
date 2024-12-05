import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFilePdf } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

function ServicesRight() {
  return (
    <>
      <div className='flex flex-col gap-[50px]'>
        {/* 1st box */}
        <div className="bg-gray-100 rounded-[10px] p-[20px] md:p-[30px]">
          <p className="text-2xl text-blue-950 mb-[40px] font-bold ">All Services</p>
          <div className="flex flex-col gap-[10px]">
            {/* div1 */}
            <div className="group hover:bg-blue-600 hover:text-white hover:cursor-pointer text-gray-500 flex justify-between items-center bg-white rounded-[10px] gap-[90px] p-[15px]">
              <p className="font-poppins text-[14px] md:text-[17px] md:whitespace-nowrap">Software Development</p>
              <AiOutlineArrowRight className="text-blue-500 text-[20px] font-[600] group-hover:text-white" />
            </div>

            {/* div2 */}
            <div className="group flex justify-between items-center hover:text-white hover:bg-blue-600 hover:cursor-pointer text-gray-500 bg-white rounded-[10px] gap-[90px] p-[15px]">
              <p className="font-poppins text-[14px] md:text-[17px]">Web Development</p>
              <AiOutlineArrowRight className="text-blue-500 text-[20px] font-[600] group-hover:text-white" />
            </div>

            {/* div3 */}
            <div className="group flex justify-between items-center hover:text-white hover:bg-blue-600 hover:cursor-pointer text-gray-500 bg-white rounded-[10px] gap-[90px] p-[15px]">
              <p className="font-poppins text-[14px] md:text-[17px]">App Development</p>
              <AiOutlineArrowRight className="text-blue-500 text-[20px] font-[600] group-hover:text-white" />
            </div>

            {/* div4 */}
            <div className="group flex justify-between items-center hover:text-white hover:bg-blue-600 hover:cursor-pointer text-gray-500 bg-white rounded-[10px] gap-[90px] p-[15px]">
              <p className="font-poppins text-[14px] md:text-[17px]">Game Development</p>
              <AiOutlineArrowRight className="text-blue-500 text-[20px] font-[600] group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* 2nd box */}
        <div className="bg-gray-100 rounded-[10px] p-[30px]">
          <p className="text-2xl text-blue-950 mb-[40px] font-bold ">Download Brochure</p>
          <div className="flex flex-col gap-[20px]">
            {/* div1 */}
            <div className="group  bg-blue-600 text-white hover:cursor-pointer flex items-center justify-center hover:bg-blue-950 rounded-[10px] gap-[5px] p-[15px]">
              <FaFilePdf></FaFilePdf>
              <p className="font-poppins text-[17px]">Download PDF</p>
            </div>
              {/* div2 */}
            <div className="group  bg-white text-blue-950 hover:text-white hover:cursor-pointer flex items-center justify-center hover:bg-blue-950 rounded-[10px] gap-[5px] p-[15px]">
              <FaFileAlt></FaFileAlt>
              <p className="font-poppins text-[17px]">Download PDF</p>
            </div>
            
          </div>
        </div>

        {/* 3rd box */}
        <div style={{ backgroundImage: "url('/images/contact-banner.jpg')"}} className='flex bg-cover bg-center rounded-[10px] h-[450px] flex-col gap-[35px] text-white items-center justify-center'>
              <p className='text-[22px] font-semibold'>Cotact Us Now</p>
              <h1 className='text-4xl font-bold'>You Need Help?</h1>
                 <button className='text-white hover:bg-gray-100 hover:text-blue-950 hover:cursor-pointer rounded-[10px] text-[18px]  font-semibold p-[15px] flex gap-[5px] bg-blue-600 items-center justify-center'>
                      <p>Get a Quote</p>
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                 </button>
        </div>
      </div>
    </>
  );
}

export default ServicesRight;
