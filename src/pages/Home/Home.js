import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = ({search,category,setCategory}) => {
  // const [category,setCategory] = useState('All')
  console.log("Home",search,category)
  return (
    <div>
      {/* {search?
    <></>:
    <> */}
       <Header/>
       <ExploreMenu category={category} setCategory={setCategory}/>
    {/* </>
   
    } */}
     
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
