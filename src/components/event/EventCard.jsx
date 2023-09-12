import React from 'react'
import CountDown from './CountDown'

function EventCard() {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2`}>
        <div className='w-full lg:w-[50%] m-auto '>
            <img className='h-[450px] ' src='https://cdn7.ouedkniss.com/1600/medias/announcements/images/vwLoV/aFIhvAQyq7yuZY8CVR2uHjwHjvfNP4yBa9X3Hc3N.jpg' alt=''/>
        </div>
        <div className='w-full lg:w-[50%] flex flex-col justify-center gap-y-7'>
            <h2 className={`text-[25px] font-[600] font-body text-[#333]`}>Iphone 14pro max 8/25gb</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente officia, ipsum magnam amet quos odio fugiat, necessitatibus reprehenderit neque ut doloribus ipsa vel consequatur repudiandae dignissimos saepe voluptas nostrum sed!
            </p>
            <div className='flex py-2 justify-between'>
                <div className='flex'>
                    <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through font-body'>
                        1099$
                    </h5>
                    <h5 className='font-bold text-[20px]  text-[#333] font-body'>
                        999$
                    </h5>
                </div>
                <span className='pr-3 font-[400] text-[17px] text-[#44a55e] '>
                    120 sold
                </span>
            </div>
            <CountDown/>
        </div>
    </div>
  )
}

export default EventCard
