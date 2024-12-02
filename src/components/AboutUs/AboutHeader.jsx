function AboutHeader()
{
    const symbol = '>';
    return <>
       <div className="text-white w-full h-[430px] bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('/images/breadcumb-bg.jpg')" }}>
             <h1 className="text-5xl mb-[20px] font-bold">About Us</h1>
             <div className="flex text-xl gap-[10px]">
                <p>Home</p>
                <p><span>{symbol}{symbol}</span></p>
                <p>About Us</p>
             </div>
             
       </div>
    </>
}

export default AboutHeader ;