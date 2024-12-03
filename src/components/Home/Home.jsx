import NavBar from "../NavBar";
import Header from "./Header";
import Services from "./Services";
import CompanyIntro from "./Company-Into";
import MoreInfo from "./More-Info";
import Process from "./Process";

function Home()
{
    return <>
       <NavBar></NavBar>
       <Header></Header>
       <Services></Services>
       <CompanyIntro></CompanyIntro>
       <MoreInfo></MoreInfo>
       <Process></Process>
    </>
}


export default Home ;