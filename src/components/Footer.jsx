import '../assets/scss/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
    <div className="wrap">
      <div className="inner">
        <div className='footer'>
          <div className="ft_top1">
          <FontAwesomeIcon icon={faPhone} color='#887469' cursor='pointer' />
          <FontAwesomeIcon icon={faEnvelope} color='#887469' cursor='pointer' />
          </div>
          <div className="ft_top">
            <p>이용약관&nbsp;&nbsp;&nbsp;&nbsp;|</p>
            <p>개인정보처리방침&nbsp;&nbsp;&nbsp;&nbsp;|</p>
            <p>사업자정보확인</p>
          </div>
          <div className="ft_middle">
            <p>상호: 행운책방</p>
            <p>대표: 박소정</p>
            <p>개인정보관리책임자: 박소정</p>
            <p>전화: 070-0000-0000</p>
            <p>이메일: haxpy@gmail.com</p>
          </div>
          <div className="ft_bottom">
            <small>Copyright 행운책방 All rights reserved.</small>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer;