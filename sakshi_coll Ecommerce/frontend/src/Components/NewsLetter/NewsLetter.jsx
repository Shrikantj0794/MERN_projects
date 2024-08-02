import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Whatsapp Number</h1>
      <p>Connect to our upcomings Mega Offer</p>
      <div>
        <input type="email" placeholder='Whatsapp Number' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
