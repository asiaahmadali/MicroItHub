import NavBar from "../NavBar";
import WebHeader from "./WebHeader";
import WebDevIntro from "./WebDevIntro";
import ServicesDetails from "./ServicesDetails";
import Footer from "../Footer";
import Vision from "./Vision";
import Banner from "./Banner";

function WebDev()
{
    return <>
          <NavBar></NavBar>
          <WebHeader></WebHeader>
          <WebDevIntro></WebDevIntro>
          <Banner></Banner>
          <Vision></Vision>
          <ServicesDetails></ServicesDetails>
          <Footer></Footer>
    </>
}


export default WebDev ;