import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [authMode,setAuthMode] = useState("");
  return (
    <>
    {authMode !== "" && (
        <Login
          initialState={authMode === "Sign Up" ? "Sign Up" : "Login"}
          setShowAuthMode={setAuthMode}
        />
    )}

    <div className='app'>
      <Navbar setAuthMode={setAuthMode} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App