import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setAuthMode}) => {
  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#about-us' onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>About Us</a>
        <a href='#contact-us' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
      <img src={assets.search_icon} alt="search"/>
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="cart"/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token
          ? <>
          <button onClick={()=>setAuthMode("login")}>Login</button>
          <button onClick={()=>setAuthMode("Sign Up")}>Sign up</button>
          </>
          :
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar