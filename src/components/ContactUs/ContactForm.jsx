import { FaAddressBook } from 'react-icons/fa';
import ContactSubForm from './ContactSubForm';


function ContactForm()
{
    return <>
        <div className='p-[50px] bg-gray-100 pt-[150px]'>
              <div className="text-blue-500 flex gap-[10px] mb-[20px]">
                   <FaAddressBook className='text-3xl'></FaAddressBook>
                   <p className='font-semibold text-[19px]'>contact with us!</p>
              </div>
              <div className='flex flex-col gap-[15px]'>
                  <h1 className='md:text-4xl text-2xl font-bold'>Have Any Questions?</h1>
                  <p className='text-gray-500 font-semibold text-[17px] md:text-[19px]'>Your success is our priority – let’s make it happen together!</p>
              </div>
           <ContactSubForm></ContactSubForm>
           
        </div>
    </>
}


export default ContactForm ;