import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import '../assets/scss/About.scss';
import AOS from "aos";
import "aos/dist/aos.css";

const MainAbout = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <>
    <div  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className="wrap">
      <div className="inner">
        <div className="text_box">
          <h2>ABOUT</h2>
          <Link to ="/SubAbout/*"><button>더 보기</button></Link>
        </div>
        <div className="img_box">
          <a href="javascript:void(0)"><img src={`/public/about_main.jpg`} alt='main'/></a>
          <div className="color_box">
          <h3>2024년 9월,<br /><span>'행운책방' </span>의 문을 엽니다.</h3>
          <a href="javascript:void(0)">
          따뜻한 가을 햇살과<br />
          종이 책의 온기가 어우러지고,<br />
          이내 종이 책의 매력에 젖어듭니다.
          </a>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default MainAbout;