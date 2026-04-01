import React from 'react'
import ProductBar from '../Components/ProductBar'
import DeatilsBar from '../Components/Home/DeatilsBar'
import Hero from '../Components/Home/Hero'
import CategoryBar from '../Components/Home/CategoryBar'
import Offer from '../Components/Home/Offer'
import DealBar from '../Components/Home/DealBar'
import DiscountBar from '../Components/Home/DiscountBar'
import Newsletter from '../Components/Home/Newsletter'




const Home = () => {
  return (
    <>
    <Hero/>
     <DeatilsBar/>
     <CategoryBar/>
      <ProductBar />
      <Offer/>
      <DealBar/>
      <DiscountBar/>
      <Newsletter/>
      
    
    </>
  )
}

export default Home
