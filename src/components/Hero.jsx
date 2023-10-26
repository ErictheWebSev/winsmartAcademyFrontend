import Herobg from '../static/logobg.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <section className="-mt-14 mb-6 py-10 bg-gradient-to-tr from-purpleP to-blue-600 h-[42rem] sm:h-[40rem] relative flex flex-col items-center">
      <article class="w-full flex items-center flex-col mt-10 h-full px-4">
        <h2 className="max-w-md text-3xl text-gray-100 text-center sm:text-4xl
        font-bold">
         Welcome to the Deriv Seminar
        </h2>
        <p className="max-w-md text-lg text-white text-center my-8">
          Join us for a day of learning and exploration of smart Deriv strategies.
        </p>
        <p className="max-w-md text-2xl text-white text-center mb-5 font-bold">
          5.11.2023
        </p>
        
        <Link to='/register' className="border border-white bg-transparent text-lg text-center text-white w-full sm:w-96 p-4 h-14 rounded-xl hover:bg-white hover:text-blue-600 outline-none">Register Now</Link>
        
      </article>
      <div className="w-full sm:w-[92%] h-60 bg-gray-100 px-3 py-4 absolute bottom-0">
        <div className="flex sm:flex-row flex-col w-full h-full px-1 justify-between">
          <div className="w-full sm:w-1/2 h-44 sm:h-full bg-blue-600 rounded-lg">
            {/*countdown timer*/}
          </div>
          
          <div className="w-full sm:w-1/2 h-full flex justify-between p-5 flex-col space-y-3">
            <div className="flex space-x-5">
              <div>
                <i className="fas fa-calender-days text-4xl text-white bg-blue-600 p-2 rounded-xl"></i>
              </div>
              <div>
                <p>5th November, 2023</p>
                <p>Duration: 6hrs</p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div>
                <i className="fas fa-map-marker-alt text-4xl text-white bg-blue-600 py-2 px-3 rounded-xl"></i>
              </div>
              <div>
                <p>Lagos, Nigeria</p>
                <p>00, undefined 404, LGA</p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div>
                <i className="fas fa-users text-4xl text-white bg-blue-600 p-2 rounded-xl"></i>
              </div>
              <div>
                <p>97 Participant</p>
                <p>53 tickets left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Hero