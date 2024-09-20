import { Link } from 'react-router-dom'
import books from '../assets/subNewBooks.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import '../assets/scss/SubNew.scss';
const SubNew = () => {
  return (
    <>
      <div className="wrap10">
        <div className="inner">
          <div className="text_box">
            <Link to ="/"><h2>HOME&nbsp;&nbsp;&nbsp;</h2></Link>
            <a className='new' href="javascript:void(0)">&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;</a>
            </div>         
          </div>
      <a className='new_img' href="javascript:void(0)"><img src={`/public/sub_new.png`} alt='main'/></a>
        <div className="inner">
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
                  <div className="btn">
                  <button className='cart'>담기</button>
                  <FontAwesomeIcon icon={faHeart} color='red' border='1px solid #000' cursor='pointer' display='block' width='10%' size='2x' />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  )
} 

export default SubNew;