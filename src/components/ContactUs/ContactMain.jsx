import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // For Phone and Email icons

function ContactMain()
{
    return <>
       <div className="flex pt-[30px] p-[10px] gap-[20px] md:flex-row flex-col w-full h-auto mb-[10px] md:h-[500px] items-center justify-center">
  {/* Card 1 */}
  <div className="flex gap-[20px] h-[180px] md:h-[210px] w-full md:w-[400px] p-[30px] rounded-md md:p-[40px] shadow-md border shadow-gray-400">
    <div className="bg-blue-500 rounded-[10px] shadow-md shadow-blue-500 flex items-center justify-center h-[70px] md:h-[80px] p-[15px] md:p-[22px]">
      <FaMapMarkerAlt className="text-white text-4xl" />
    </div>
    <div>
      <h1 className="md:text-2xl text-xl font-bold mb-[10px]">Our Office Address</h1>
      <p className="md:text-[19px] text-[16px] text-gray-500">
        57D Commercial, Nawab Town, Raiwind Road, Lahore, Pakistan
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex gap-[20px] h-[180px] md:h-[210px] w-full md:w-[400px] p-[30px] rounded-md md:p-[40px] shadow-md border shadow-gray-400">
    <div className="bg-blue-500 rounded-[10px] shadow-md shadow-blue-500 flex items-center justify-center h-[70px] md:h-[80px] p-[15px] md:p-[22px]">
      <FaPhoneAlt className="text-white text-4xl" />
    </div>
    <div>
      <h1 className="md:text-2xl text-xl font-bold mb-[10px]">Call Us Anytime</h1>
      <p className="md:text-[19px] text-[16px] text-gray-500">(+13) - 07291 - 461</p>
      <p className="md:text-[19px] text-[16px] text-gray-500">+92329-5331-837</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex gap-[20px] h-[180px] md:h-[210px] w-full md:w-[400px] p-[30px] rounded-md md:p-[40px] shadow-md border shadow-gray-400">
    <div className="bg-blue-500 rounded-[10px] shadow-md shadow-blue-500 flex items-center justify-center h-[70px] md:h-[80px] p-[15px] md:p-[22px]">
      <FaEnvelope className="text-white text-4xl" />
    </div>
    <div>
      <h1 className="md:text-2xl text-xl font-bold mb-[10px]">Send An Email</h1>
      <p className="md:text-[19px] text-[16px] text-gray-500">info@microithub.com</p>
    </div>
  </div>
</div>

    </>
}

export default ContactMain ;