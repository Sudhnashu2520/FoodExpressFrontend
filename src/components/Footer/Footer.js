import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <h2>Food Express</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
            <div className="footer-social-icons">
                <a href='https://x.com/SudhanshuLokha1'><img src={assets.twitter_icon}  alt="" /></a>
               <a href='https://github.com/dashboard'> <img src={require('../../assets/github.png')}  alt="" /></a>
               <a href='https://www.linkedin.com/in/sudhanshu-lokhande-082779248/'> <img src={assets.linkedin_icon}  alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8767184785</li>
                <li>sudhanshulokhande786@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Sudhanshu Lokhande - All Right Reserved.</p>
    </div>
  )
}

export default Footer
