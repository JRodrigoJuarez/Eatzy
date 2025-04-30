import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>At Eatzy, we believe good food should be just a tap away — whether you're too tired to cook, hanging out with friends, or just craving your favorite comfort meal. We're here to make food ordering simple, quick, and satisfying for everyone, every day.</p>
                <div className="footer-social-icons">
                    <a href="https://github.com/AsmitaMishra24" target="_blank" rel="noopener noreferrer"><img src={assets.github_icon} alt="Github"/></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><img src={assets.facebook_icon} alt="Facebook"/></a>
                    <a href="https://www.linkedin.com/in/asmitamishra1/" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="LinkedIn"/></a>
                    <a href="https://x.com/asmita_coder" target="_blank" rel="noopener noreferrer"><img src={assets.twitter_icon} alt="Twitter" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-123-456-7899</li>
                    <li>support@eatzy.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright {currentYear} @ Eatzy.com - All Right Reserved</p>
    </div>
  )
}

export default Footer