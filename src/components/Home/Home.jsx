import NavBar from "../NavBar";
import Header from "./Header";
import Services from "./Services";
import CompanyIntro from "./Company-Into";
import MoreInfo from "./More-Info";

function Home()
{
    return <>
       <NavBar></NavBar>
       <Header></Header>
       <Services></Services>
       <CompanyIntro></CompanyIntro>
       <MoreInfo></MoreInfo>
    </>
}


export default Home ;