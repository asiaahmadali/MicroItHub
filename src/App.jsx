import Microithub from "./components/Microithub";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease', // Easing function
      once: true, // Trigger animation once
    });
  }, []);

  return (
    <>
        <Microithub></Microithub>
    </>
  );
}

export default App;
