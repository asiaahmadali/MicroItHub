
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

const SliderComponent = () => {
  // Settings for the slider
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between each slide (2000ms = 2s)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
