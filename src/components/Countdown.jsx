import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(9 * 24 * 60 * 60 * 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval)
          return 0
        }
        return prevTime - 1000
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000))
  const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000)
  
  return (
    <div>
      { timeRemaining > 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-2xl text-white my-5">Countdown</p>
          <div className="flex px-3 mb-8">
            <div className="box">
              { days }
              <div className="days">
                Days
              </div>
            </div>
            <div className="box">
              { hours }
               <div className="days">
                Hours
              </div>
            </div> 
            <div className="box">
              { minutes }
               <div className="days">
                Minutes
              </div>
            </div> 
            <div className="box">
              { seconds }
               <div className="days">
                Seconds
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Countdown has ended!</p>
      ) }
    </div>
  )
}

export default Countdown