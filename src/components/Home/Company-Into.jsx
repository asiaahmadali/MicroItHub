function CompanyIntro()
{
    return <>
      <div className="flex md:flex-row flex-col p-[20px] md:p-[50px] items-center gap-[50px] md:gap-[100px]">
              {/* img div */}
              <div className="md:w-1/2 w-full relative">
                   
                    <img src="/images/graph1.jpg" alt="" className='md:w-[200px] h-[150px] w-[200px]  absolute top-[50px] md:top-[150px] left-[-20px] md:h-[200px] rounded-[10px] animate-downup'/>
                    <img src="/images/star.png" alt="" className="absolute right-[80px] top-[-20px] rotate-animation"/>
                    <img src="images/arrow-2.png" alt="" className="absolute right-[-170px] hidden md:block z-[-1]"/>
                    <img className="rounded-[30px]" src="images/microithub.png" alt="" />
                    <img src="/images/graph-2.jpg" alt="" className='md:w-[250px] w-[200px] absolute right-[20px] md:right-[50px] bottom-[-20px] h-[150px] md:h-[200px] border-8 border-white rounded-[10px] animate-updown'/>
              </div>

              

              {/* intro text */}
              <div className="md:w-1/2 w-full flex flex-col gap-[20px]">
              <p className="text-blue-500 font-semibold text-[18px] flex items-center"> WHO WE ARE<span className="w-12 h-[2px] bg-blue-500 ml-2"></span> {/* Blue line */}</p>
                    <h1 className="md:text-4xl text-2xl leading-[35px] md:leading-[45px] font-bold">We are developing innovative, high-performance  <span className="text-blue-600 ">Software solutions</span> </h1>
                    <p className="text-gray-500 text-[16px] md:text-[18px] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Voluptatum magnam facilis maxime eligendi esse amet vitae magni fuga
                         iusto accusantium. Dolorem corporis, excepturi voluptates laborum
                          placeat atque deserunt nesciunt sunt enim fuga sed cum optio 
                          temporibus aspernatur corrupti itaque magni<br></br><br></br> quisquam dicta 
                          quasi eos iusto eum quibusdam? Qui quis saepe nesciunt porro natus
                           sequi commodi quasi veniam? Sint cupiditate non asperiores
                            laboriosam at, quas laborum eligendi soluta incidunt doloribus qui
                             modi a facilis labore nam recusandae illo id. Porro placeat
                              excepturi dignissimos provident debitis earum<br></br> <br></br>modi ipsam ipsa. 
                              Perspiciatis officiis ut tempore sapiente, aliquam qui
                               architecto consectetur quaerat facere?modi ipsam ipsa. 
                              Perspiciatis officiis ut tempore sapiente, aliquam qui
                               architecto consectetur quaerat facere?Sint cupiditate non asperiores
                               laboriosam at, quas laborum eligendi</p>
              </div>
      </div>
    </>
}


export default CompanyIntro ;