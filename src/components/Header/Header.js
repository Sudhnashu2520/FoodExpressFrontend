import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container header '>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a detectable array of dishes crafted with finest ingredients and culinary expertise.</p>
        <button ><a style={{textDecoration:'none',color:'#ffff'}} href='#food-item'>Explore Menu</a></button>
      </div>
    </div>
  )
}

export default Header
