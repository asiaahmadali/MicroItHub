import NavBar from "../NavBar";
import Header from "./Header";
import Services from "./Services";
import CompanyIntro from "./Company-Into";
import MoreInfo from "./More-Info";
import Process from "./Process";
import ChooseUs from "./ChooseUs";
import VideoSection from "./Video-Section";
import Footer from "../Footer";

function Home()
{
    return <>
       <NavBar></NavBar>
       <Header></Header>
       <Services></Services>
       <CompanyIntro></CompanyIntro>
       <MoreInfo></MoreInfo>
       <Process></Process>
       <ChooseUs></ChooseUs>
       <VideoSection></VideoSection>
       <Footer></Footer>
    </>
}


export default Home ;