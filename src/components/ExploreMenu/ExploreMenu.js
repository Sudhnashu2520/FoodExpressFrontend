import React,{useState,useRef} from 'react'
import './ExploreMenu.css'


const ExploreMenu = ({category,setCategory}) => {
  const menu=[
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

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

  // Update the state with the new scroll position
  setScrollPosition(newScrollPosition);

  // Access the container element and set its scrollLeft property
  containerRef.current.scrollLeft = newScrollPosition;

  };

  return (
    <div className='explore-menu' id='explore-menu'>
        <div className='container d-flex  justify-content-between'>
        <h1>Explore our menu</h1>
        <div className="d-flex action-btns"> 
        <button className='fas fa-angle-left' onClick={() => handleScroll(-200)} ><img src={require('../../assets/left-arrow.png')} /></button>
        <button onClick={() => handleScroll(200)}><img src={require('../../assets/right-arrow.png')} /></button>
      </div>
        </div>
      
      {/* <p className='explore-menu-text'>Choose from a diverse menu</p> */}
        <div ref={containerRef} className='explore-menu-list'>
            {menu.map((e,i)=>{
                    return(
                        <div onClick={()=>setCategory((prev)=>prev.toLowerCase()==e.name.toLowerCase()?'All':e.name)} key={i} className='explore-menu-list-item' >
                            <img className={category==e.name?'active':''} src={e.img} alt="/"/>
                            <p>{e.name}</p>
                        </div>

                    )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
