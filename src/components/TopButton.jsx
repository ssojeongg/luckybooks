import '../assets/scss/TopButton.scss'
import { useState, useEffect } from 'react';
const TopButton = () => {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    const handleShowButton = () => {
        if (window.scrollY > 100) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }
    console.log(window.scrollY)
    window.addEventListener("scroll", handleShowButton)
    return () => {
        window.removeEventListener("scroll", handleShowButton)
    }
}, [])

  return showButton && (
      <div className="scroll__container">
          <button id="top" onClick={scrollToTop} type="button" > Top</button>
      </div>

  )
  }

export default TopButton;