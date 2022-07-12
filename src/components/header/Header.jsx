import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me-1.png"
import HeaderSocials from './HeaderSocials'
import "./header.css"
const Header = () => {
  return (
    <header>
      <div className="container header__continer">
        <h5>Hello I'm</h5>
        <h1>Sandeep Guttula</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      <div className='line'></div>
    </header>
  )
}

export default Header