import React from 'react'
import './footer.css'
import {BsGithub,BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sandeep Guttula</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href=""><BsGithub/></a>
        <a href=""><BsTwitter/></a>
        <a href=""><BsInstagram/></a>
        <a href=""><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sandeep Guttula. All  rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer