import React, { useEffect, useState } from 'react'

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimesLeft())
  console.log(timeLeft);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimesLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })
  function calculateTimesLeft(){
    const difference = +new Date('2023-09-20') - +new Date()
    console.log(difference);
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const timesrComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }
    return (
      <span className='text-[25px] text-[#475ad2] '>
        {timeLeft[interval]} {interval} {" "}
      </span>
    )
  })
  return (
    <div className=''>
      {timesrComponents.length ? timesrComponents : <span className='text-[red]  text-[25px] '>Times's up!</span>}
    </div>
  )
}

export default CountDown
