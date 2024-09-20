import  { useEffect } from "react";
import '../assets/scss/SaleEvent.scss'
import "aos/dist/aos.css";
import AOS from "aos";

const SaleEvent = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <>
      <div data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className="wrap8">
        <div className="inner">
          <div className="sale_box">  
            <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale1.jpg`} alt='sale1'/></a>
            </div>
            <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale2.jpg`} alt='sale2'/></a>
            </div>
            <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale3.jpg`} alt='sale3'/></a>
            </div>
            <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale4.jpg`} alt='sale4'/></a>
          </div>
          <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale5.jpg`} alt='sale5'/></a>
          </div>
          <div className="img_box">
              <a href="javascript:void(0)"><img src={`/public/sale6.jpg`} alt='sale6'/></a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SaleEvent