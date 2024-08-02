import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p> VISIT OUR STORE</p>
        <Link to={'https://maps.app.goo.gl/Dx9GxKCiqAcS5oLV7'} target='_blank'>
        <button>Vsit Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
