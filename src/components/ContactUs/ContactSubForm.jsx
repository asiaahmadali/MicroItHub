import { FaUser, FaEnvelope, FaPhoneAlt, FaCaretDown } from 'react-icons/fa';  // Import icons
import { FaArrowRight } from 'react-icons/fa';

function ContactForm() {
  return (
    <form className="max-w-4xl w-full p-6 pl-0 text-[17px]">
      
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6 ">
        {/* Name Field */}
        <div className="relative flex  items-center bg-white p-2 md:p-3 rounded-md border border-transparent focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pr-10 pl-3 py-2 outline-none bg-white"
          />
          <FaUser className="absolute right-3 text-blue-500" />
        </div>

        {/* Email Field */}
        <div className="relative flex items-center bg-white p-2 md:p-3 rounded-md border border-transparent focus-within:border-blue-500">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full pr-10 pl-3 py-2 outline-none bg-white"
          />
          <FaEnvelope className="absolute right-3 text-blue-500" />
        </div>
      </div>

      {/*  Subject and Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Subject Dropdown */}
        <div className="relative flex items-center bg-white p-2 md:p-3 rounded-md border border-transparent focus-within:border-blue-500">
           <select  name="subject" className="w-full pr-10 pl-3 py-2 focus:outline-none appearance-none text-gray-400">
    
               <option value="" disabled selected className="text-gray-100 font-bold">Select Subject</option>
               <option value="general">Web Development</option>
               <option value="support">Software Development</option>
               <option value="feedback">Mobile App Development</option>
           </select>
          <FaCaretDown className="absolute right-3 text-blue-500" />
        </div>


        {/* Phone Number */}
        <div className="relative flex  items-center bg-white p-2 md:p-3 rounded-md border border-transparent focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full pr-10 pl-3 outline-none bg-white"
          />
          <FaPhoneAlt className="absolute right-3 text-blue-500" />
        </div>
      </div>

      {/*Message */}
      <div className="mb-6 relative  rounded-md focus-within:border-blue-500">
  <textarea
    placeholder="Your Message"
    rows="7"
    className="w-full pr-10 pl-3 border-none focus:outline-none"
  />
  <FaEnvelope className="absolute right-3 text-blue-500 top-3" />
</div>


      {/* Submit Button */}
      <button type="submit" className="w-auto bg-blue-500 ml-0 text-white py-3 px-6 rounded-md hover:bg-blue-600 mx-auto  flex items-center justify-center space-x-2">
          <span>Send Message</span>
          <FaArrowRight className="text-white" />
        </button>
    </form>
  );
}

export default ContactForm;
