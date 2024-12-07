import NavBar from "../NavBar";
import WebHeader from "./WebHeader";
import WebDevIntro from "./WebDevIntro";
import ServicesDetails from "./ServicesDetails"
function WebDev()
{
    return <>
          <NavBar></NavBar>
          <WebHeader></WebHeader>
          <WebDevIntro></WebDevIntro>
          <ServicesDetails></ServicesDetails>
    </>
}


export default WebDev ;