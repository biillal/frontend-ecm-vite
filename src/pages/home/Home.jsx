import React from 'react'
import MainLayout from '../../components/MainLayout'
import Slider from './content/slider/Slider'
import Category from './content/category/Category'
import Event from '../../components/event/Event'

function Home() {
  return (
    <MainLayout>
      <div >
        <Slider />

        <Category />
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
