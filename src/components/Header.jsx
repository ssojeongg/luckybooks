/* import React from 'react' */
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../assets/scss/Header.scss';

const Header = () => {

  return (
    <>
      <div className="wrap">
        <div className="inner">
          <div className="header_top">
            <Link to ="/"><div className="logo">
              <a href="javascript:void(0)">행 운</a>
              <a href="javascript:void(0)">책 방</a>
            </div>
            </Link>
            <input type="text" placeholder='검색어를 입력하세요.' />
            <FontAwesomeIcon icon={faCartShopping} size='2x' color='#887469' cursor='pointer' />
          </div>
          <div className="header_bottom">
            <nav>
              <ul>
              <Link to ="/SubAbout/*"><li>ABOUT</li></Link>
              <Link to ="/SubBest/*"><li>BEST</li></Link>
              <Link to ="/SubNew/*"><li>NEW</li></Link>
              <Link to ="/SubCommunity/*"><li>COMMUNITY</li></Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;