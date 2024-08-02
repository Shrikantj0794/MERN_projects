import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image_sc from '../Assets/SC-collection/hero_image_sc.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <Link to={'/newcollections'}>
        <div className="hero-latest-btn">
         
            <div>Latest Collection</div>
          
            <img src={arrow_icon} alt="" />
        </div>
          </Link>
        <Link to={'https://maps.app.goo.gl/Dx9GxKCiqAcS5oLV7'} class="store-link" target='_blank'>Visit Our Store</Link>
      </div>
      <div className="hero-right">
        <img src={hero_image_sc} alt="" />
      </div>
    </div>
  )
}

export default Hero
