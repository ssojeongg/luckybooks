import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../assets/scss/Banner.scss'

// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <>
      <div  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1200" className="wrap3">
        <div className="inner">
          <div className="banner1">
          <div className="banner_text">
            <a href="javascript:void(0)">
              <span>행운책방</span>에서, <br />
              월간 독립 출판물을 만나보세요. <br />
              오직 당신을 위한 특별한 선물입니다.
            </a>
          </div>
          <div className="banner_img">
          <a href="javascript:void(0)"><img src={import.meta.env.VITE_PUBLIC_URL + `/bookstore.png`}/></a>
          </div>
          <div className="btn">
            <button>더 보기</button>
          </div>
          </div>
          <div className="banner2">
          <div className="banner_text">
            <a href="javascript:void(0)">
              <span>행운책방</span>에서, <br />
              월간 독립 출판물과 상품을 만나보세요. <br />
              테마별 책부터, 독서를 위한 굿즈까지
            </a>
            <div className="slide_box2">
        <Swiper className='slide_in'
      // install Swiper modules
      modules={[Autoplay,Pagination, Scrollbar, A11y]}
      breakpoints={{

        767 : {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide1.jpg`} />
          <a href="javascript:void(0)">
            보리가 글씨쓰는 복조리 파우치<br />
            9,750원
          </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide2.jpg`} />
          <a href="javascript:void(0)">
            벼리보리키링<br />
            5,500원
          </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide3.jpg`} />
          <a href="javascript:void(0)">
            빌리지 티코스터<br />
            5,900원
          </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide4.jpg`} />
          <a href="javascript:void(0)">
            빌리지 에코백<br />
            17,900원
          </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide5.jpg`} />
          <a href="javascript:void(0)">
            벼리가 열심히 포장하는 머그컵<br />
            10,500원
          </a>
          </SwiperSlide>
          <SwiperSlide className='slide'>
          <img src={import.meta.env.VITE_PUBLIC_URL + `/banner_slide6.jpg`} />
          <a href="javascript:void(0)">
            빌리지캔들<br />
            6,900원
          </a>
          </SwiperSlide>
    </Swiper>
        </div>
          </div>
          <div className="btn">
            <button>더 보기</button>
          </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Banner