import React, { useEffect, useState } from 'react'
import { sliderData } from './slider-data'
import "./Slider.scss"
function Slider() {
  const [currentSlice, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length
  const autoScroll = true
  let SliderIntervel
  const intervalTime = 5000
  const prevSlide = () => {
    setCurrentSlide(currentSlice === 0 ? slideLength - 1 : currentSlice - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlice === slideLength - 1 ? 0 : currentSlice + 1);
  }
  useEffect(() => {
    setCurrentSlide(0)
  }, [])
  useEffect(() => {
    if(autoScroll){
      const auto = () =>{
        SliderIntervel = setInterval(nextSlide,intervalTime)
      }
      auto()
    }
    return () =>clearInterval(SliderIntervel)
  }, [currentSlice,intervalTime,autoScroll])
  return (
    <div className='slider'>
      <i class="ri-arrow-left-circle-fill text-3xl text-center arrow prev" onClick={prevSlide}></i>
      <i class="ri-arrow-right-circle-fill text-3xl text-center arrow next" onClick={nextSlide}></i>
      {
        sliderData.map((slide, index) => {
          const { image, heading, desc } = slide

          return (
            <div key={index} className={index === currentSlice ? "slide current" : "slide"}>
              {
                index === currentSlice && (
                  <>
                    <img src={image} alt='slide' className='' />
                    <div className='content'>
                      <span className='span1'></span>
                      <span className='span2'></span>
                      <span className='span3'></span>
                      <span className='span4'></span>
                      <h2>{heading} </h2>
                      <p>{desc} </p>
                      <hr />
                      <button className="--btn --btn-primary">
                        Shop Now
                      </button>
                    </div>
                  </>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Slider
