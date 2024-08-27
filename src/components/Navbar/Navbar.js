import React, { useState,useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin,setSearch,setCategory,category,search}) => {
  const [menu,setMenu] = useState('home');
  // const [category,setCategory] = useState("All")
  const [searchCategory,setSearchCategory] = useState()
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  console.log("Nav",category,search);
  
  const cat=[
    {
        name:"Pure-veg",
    img:require('../../assets/vegthali.jpg')
    },
    {
        name:"Rolls",
    img:require('../../assets/roll.jpg')
    },
    {
        name:"Desserts",
    img:require('../../assets/cake.jpg')
    },
    {
        name:"Pizza",
    img:require('../../assets/pizza.jpg')
    },
    {
        name:"Pasta",
    img:require('../../assets/pasta.jpg')
    },
    {
        name:"Upma",
    img:require('../../assets/southindian.jpg')
    },
    {
        name:"Chinese",
    img:require('../../assets/chinese.jpg')
    },
    {
        name:"Biryani",
    img:require('../../assets/biryani.jpg')
    }
    ,
    {
        name:"Burger",
    img:require('../../assets/burger.jpg')
    }
  ]  

  const food_list = useContext(StoreContext)
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  const onChangeHandler =(e)=>{
    setSearchCategory(e.target.value)
    console.log(e.target.value);
    
  }

  const onSearch = () =>{
    console.log("Clicked");
    
    cat.map((e,i)=>{
      console.log("map",searchCategory.toLowerCase(),e.name);
      
      if(searchCategory.length !== 0 && searchCategory.toLowerCase() ===  e.name.toLowerCase() ){
        setCategory(searchCategory)
        setSearch(true)
        console.log("yeess");
        
      }
    })
      
  }
    

  return (
    <div className='container-fluid navbar'>
        <div className='d-flex alignItems-center justify-content-center'>
        <Link to='/'><img className='logo' src={require('../../assets/foodexpress.png')} alt="" /></Link>
        <h1 className='lname'>Food Express</h1>
        </div>
       
        <ul className="navbar-menu">
        <Link to="/" style={{textDecoration: 'none',color:'#49557E'}}  onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        <a href='#explore-menu' style={{textDecoration: 'none',color:'#49557E'}} onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>menu</a>
        {/* <a href='#app-download' style={{textDecoration: 'none',color:'#49557E'}} onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</a> */}
        <a href='#footer' style={{textDecoration: 'none',color:'#49557E'}} onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
      </ul>

        <div className='navbar-right'>
          <input name='search' onChange={(e)=> onChangeHandler(e)} placeholder='Search food.....'/>
            <button onClick={()=> onSearch()}><img  src={require('../../assets/search_icon.png')}></img>
              </button> 
            <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }
        </div>
    </div>
  )
}

export default Navbar
