import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className='parent-container'>
        <div className="d-flex parts">
            <div className="part1 d-flex flex-column justify-content-center align-items-center">
                <h4 className='text-white p-3' data-aos="zoom-in-right">MERN STACK DEVELOPER</h4>
                <div className="h-50" data-aos="zoom-in">
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_3ntisyac.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
                </div>
            </div>
            <div className="part2 d-flex flex-column justify-content-center align-items-center">
                <div className="h-50 mt-5" data-aos="zoom-in">
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_dsxct2el.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>
                </div>
                <h4 className='text-white  p-3' data-aos="zoom-in-left">FRONT END DEVELOPER</h4>
            </div>
        </div>
        <div className="seprator-text"  >
            <span data-aos="zoom-out">WEBDESIGNER</span>
        </div>
    </div>
  )
}
