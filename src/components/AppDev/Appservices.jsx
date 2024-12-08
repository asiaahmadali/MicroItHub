import AppLeft from "./AppLeft" ;
import AppRight from "./AppRight" ;


function AppServices()
{
    return <>
          <div className="flex overflow-hidden md:flex-row flex-col md:gap-[10px] gap-[30px] p-[30px] md:p-[50px] justify-center mt-[100px] mb-[100px]">
                 <AppLeft></AppLeft>  
                 <AppRight></AppRight> 
          </div>
          
    </>
}

export default AppServices ;
