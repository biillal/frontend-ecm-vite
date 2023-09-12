import React from 'react'
import MainLayout from '../../components/MainLayout'
import Slider from './content/slider/Slider'
import Category from './content/category/Category'
import Event from '../../components/event/Event'
import BestDeals from './content/bestDeals/BestDeals'

function Home() {
  return (
    <MainLayout>
      <div >
        <Slider />
    
        <Category />
        <BestDeals/>
        <Event/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </MainLayout>
  )
}

export default Home
