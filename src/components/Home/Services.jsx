import Servicecard from "./Service-Card";

function Services()
{
    const h1= "Software Development";
    const h2= "Web Development";
    const h3 =  "Mobile Application Development";
    const h4 = "Game Development"

    const p1 = "Building next generation software solutions to power your business and drive innovation";
    const p2 = "Crafting dynamic web experiences to elevate your brand and accelerate growth";
    const p3 = "Designing powerful mobile apps that engage users and drive business success ";
    const p4 = "Creating emmersive game experiences that captivate players and bring stories to life "

    const linkcontent = "Learn More" ;

    return <>
        <div className="mb-[100px]">
              <div className="flex items-center justify-center gap-0">
                  <span className="w-[40px] h-0.5 bg-blue-500"></span>
                  <p className="text-blue-500  font-semibold mx-4">OUR SERVICES</p>
                  <span className="w-[40px] h-0.5 bg-blue-500"></span>
              </div>

               <div className="flex items-center justify-center mt-[20px] mb-[20px]">
                  <h1 className="text-center w-[550px] text-blue-950 text-4xl font-bold">We provide All-in-one Solution for every IT job</h1>
               </div>
 
                 {/* cards div */}
               <div className="flex md:flex-row  justify-center flex-col gap-[20px] mt-[50px]">
                     <Servicecard head={h1} para={p1} link={linkcontent}></Servicecard>
                     <Servicecard head={h2} para={p2} link={linkcontent}></Servicecard>
                     <Servicecard head={h3} para={p3} link={linkcontent}></Servicecard>
                     <Servicecard head={h4} para={p4} link={linkcontent}></Servicecard>
               </div>
        </div>
    </>
}


export default Services ;