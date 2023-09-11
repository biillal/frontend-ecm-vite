import React from 'react'
import MainLayout from '../../components/MainLayout'
import Slider from './content/slider/Slider'
import Category from './content/category/Category'

function Home() {
  return (
    <MainLayout>
      <div >
        <Slider />
        <section>
          <Category/>
        </section>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
    </MainLayout>
  )
}

export default Home
