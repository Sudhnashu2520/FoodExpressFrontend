import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const [search,setSearch] = useState(false)
  const [category,setCategory] = useState('All')
  
  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setCategory={setCategory} category={category} search={search} setSearch={setSearch} setShowLogin={setShowLogin}/>
      <div className='app'>
       
        <Routes>
          <Route path='/' element={<Home setCategory={setCategory} category={category} search={search} />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
