import ServicesLeft from "./ServicesLeft";
import ServicesRight from "./ServicesRight";
import Footer from "../AboutUs/footer";

function AllServices()
{
    return <>
          <div className="flex gap-[10px] p-[50px] justify-center mt-[100px] mb-[100px]">
                  <ServicesLeft></ServicesLeft>
                  <ServicesRight></ServicesRight>
          </div>
          <Footer></Footer>
    </>
}

export default AllServices ;
