import React, { useEffect } from "react";
import '../assets/scss/NEW.scss'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
// import Swiper core and required modules
import books from '../assets/mainNewBooks.json'
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const New = () => {

  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <>
    <div  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className="wrap">
      <div className="inner">
        <div className="text_box">
          <h2>NEW</h2>
          <Link to ="/SubNew/*"><button>더 보기</button></Link>
        </div>
        <div className="slide_box">
          
        <Swiper className='slide_in'
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      breakpoints={{

        767 : {
          slidesPerView: 4,
          spaceBetween: 150
        }
      }}
      slidesPerView={2}
      spaceBetween={10}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {books.items.map((data, index) => (
      <SwiperSlide className='slide'>
        <div className="slide_box" key={index}>
        <div className="slide_img">
        <img src={data.img} alt={data.title} />
        </div>
        <div className="slide_text">
        <h4>{data.title}</h4>
        <p className="price">{data.price}</p>
    </div>
  </div>
  </SwiperSlide>
  ))}
  </Swiper>
      </div>     
      </div>
    </div>
    </>
    )
  }
export default New;