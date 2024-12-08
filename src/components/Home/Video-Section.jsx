import { FaPlay } from 'react-icons/fa';
function VideoSection()
{
    return <>
          <div className="relative flex items-center justify-center p-[20px]"  data-aos="zoom-in">
      
          <img className="rounded-[30px] h-auto md:h-screen m-[10px] w-full" src="images/video-section-img.jpg" alt="Video Thumbnail" />

          {/* Play Icon */}
              <div className="absolute top-1/2 left-1/2 bg-white w-[70px] h-[70px] flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2">
                  <FaPlay size={20} color="blue" />
               </div>
  </div>
    </>
}


export default VideoSection ;