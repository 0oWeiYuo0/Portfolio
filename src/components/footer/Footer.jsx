import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Danny</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007224548078" target='_blank'><ImFacebook /></a>
        <a href="https://www.instagram.com/yu_wei_10.30/" target='_blank'><RiInstagramFill /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Danny Huang. All right reserved.</small>
      </div>
    </footer>
  )

}

export default Footer