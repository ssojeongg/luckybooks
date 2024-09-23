import '../assets/scss/SubAbout.scss'
import { Link } from 'react-router-dom'
const SubAbout=() => {
  return (
    <>
      <div className="wrap6">
        <div className="inner">
        <div className="text_box">
        <Link to ="/"><h2>HOME&nbsp;&nbsp;&nbsp;</h2></Link>
        <a className='about' href="javascript:void(0)">&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;</a>
        </div>
        </div>
        <div className="img_box">
        <a href="javascript:void(0)"><img src={ import.meta.env.VITE_PUBLIC_URL + `/about_main.png`} alt='main'/></a>
        </div>
        <div className="logo_box">
          <div className="inner">
            <div className="logo_in">

            <div className="logo">
              <a href="javascript:void(0)">행 운</a>
              <a href="javascript:void(0)">책 방</a>
            </div>
            </div>
            <div className="content_box">
        <div className="content">
          <h3>2024년 9월,<br /><span>'행운책방' </span>의 문을 엽니다.</h3>
          <a href="javascript:void(0)">
          따뜻한 가을 햇살과<br />
          종이 책의 온기가 어우러지고,<br />
          이내 종이 책의 매력에 젖어듭니다.
          </a>
          <a href="javascript:void(0)">
            우연히 접한 우디향의 향수를 모티브로 <br />
            책방행운의 문을 열게 되었습니다.<br />
            숲속을 거닐 때, 은은하게 나는<br />
            나무, 꽃 그리고 풀내음까지...<br />
            책과 함께 어우러진다면<br />
            얼마나 여유롭고, 또 행복할까요?
          </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default SubAbout;