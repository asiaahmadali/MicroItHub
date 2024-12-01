import NavBar from "../NavBar";
import ContactHeader from "./ContactHeader";
import ContactMain from "./ContactMain";
import ContactForm from "./ContactForm";
import ContactGoogleMap from "./ContactGoogleMap";
import Footer from "../AboutUs/footer";

function ContactUs()
{
    return <>
        <NavBar></NavBar>
        <ContactHeader></ContactHeader>
        <ContactMain></ContactMain>
        <ContactForm></ContactForm>
        <ContactGoogleMap></ContactGoogleMap>
        <Footer></Footer>
    </>
}

export default ContactUs ;