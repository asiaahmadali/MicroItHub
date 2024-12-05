import ServicesLeft from "./ServicesLeft";
import ServicesRight from "./ServicesRight";
import Footer from "../AboutUs/footer";

function AllServices()
{
    return <>
          <div className="flex overflow-hidden md:flex-row flex-col md:gap-[10px] gap-[30px] p-[30px] md:p-[50px] justify-center mt-[100px] mb-[100px]">
                  <ServicesLeft></ServicesLeft>
                  <ServicesRight></ServicesRight>
          </div>
          <Footer></Footer>
    </>
}

export default AllServices ;
