import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExploreMenu = ({category,setCategory}) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  
  return (
    <div className='explore-menu' id='explore-menu' data-aos="fade-right">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text' data-aos="fade-up">Delight in a thoughtfully curated selection of dishes, each prepared with premium ingredients and a passion for flavor. Our menu is designed to indulge your senses, satisfy your cravings, and turn every meal into a memorable experience.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item' data-aos="zoom-in" data-aos-delay={index*100}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu