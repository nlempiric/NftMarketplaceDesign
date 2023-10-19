import React, { useEffect } from 'react'
import AboutPageDetail from '../component/AboutPageDetail';
import ListsinFooter from '../component/ListsinFooter'
import AOS from "aos";
import "aos/dist/aos.css";


const Aboutpage = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
       data-aos="fade-up"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
       data-aos-duration="1000">
      <AboutPageDetail/>
      </div>
      <div className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b">
        <ListsinFooter/>
      </div>
      
    </>
    
  )
}

export default Aboutpage
