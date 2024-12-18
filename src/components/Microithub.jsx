import SoftwareDev from "./SoftwareDev/SoftwareDev";
import AppDev from "./AppDev/AppDev";
  import WebDev from "./WebDev/WebDev";

import { Routes, Route } from "react-router-dom";
import About from "./AboutUs/About";
import ContactUs from "./ContactUs/ContactUs";
import Careers from "./Careers/Careers";
import Home from "./Home/Home";

function Microithub()
{
    return <>

    <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/aboutUs" element={<About></About>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>} ></Route>
          <Route path="/careers" element={<Careers></Careers>} ></Route>
          <Route path="/software-development" element={<SoftwareDev></SoftwareDev>} ></Route>
          <Route path="/web-development" element={<WebDev></WebDev>} ></Route>
          <Route path="/mobile-app-development" element={<AppDev></AppDev>} ></Route>

    </Routes>
  
     
    </>
}



export default Microithub ;