import { useEffect } from "react";
import '../assets/scss/Best.scss'
import books from '../assets/mainBestBooks.json'
import AOS from "aos";

const Best = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="wrap4">
        <div data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="1200" className="inner">
          <div className="text_box">
            <h2>BEST</h2>
            <button>더 보기</button>
          </div>
          <div className="hover">
            {books.items.map((data, index) => (
              <div className="hover_box" key={index}>
                <div className="hover_img">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="hover_text">
                  <h4>{data.title}</h4>
                  <p className="price">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Best;