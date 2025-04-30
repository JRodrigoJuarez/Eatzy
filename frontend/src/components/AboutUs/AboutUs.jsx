import React, { useEffect } from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

  return (
    <>
    <div className="about-us-section" id="about-us">
        <div className='about-us-heading' data-aos="fade-down">About Us</div>
        <div className="about-us-wrapper">
            <div className="about-us-image" data-aos="fade-right">
                <img src={assets.about_us} alt="About-us" />
            </div>
            <div className="about-us-content" data-aos="fade-left">
                <p>Welcome to <strong>Eatzy</strong> - your go-to platform for fast, fresh, and fabulous meals delivered right to your doorstep.</p>
                <p>We're on a mission to connect food lovers with the best local restaurants. From everyday cravings to adventurous eats, we’ve got something for everyone.</p>
                <p>Every dish is handpicked for quality, taste, and satisfaction. Thanks for letting us be a part of your mealtime moments!</p>
                <a href="#explore-menu"><button className='order-now'>Order Now</button></a>
            </div>
        </div>
    </div>
    <hr className='separator'/>
    </>
  )
}

export default AboutUs