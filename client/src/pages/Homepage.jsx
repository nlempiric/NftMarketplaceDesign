import React from 'react'
import HomePageDetails from '../component/HomePageDetails'
import CardsComponent from '../component/CardsComponent'

const Homepage = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center w-full" style={{backgroundImage: 'url("/bg.webp")'}} >
        <HomePageDetails/>
        <CardsComponent/>
      </div>
    </div>
  )
}

export default Homepage
