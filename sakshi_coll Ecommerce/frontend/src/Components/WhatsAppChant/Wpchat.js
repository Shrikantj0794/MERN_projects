import React from 'react'
import './Wpchat.css'
import Whatsapp from '../Assets/SC-collection/whatsapp.svg'
function Wpchat() {
  return (
    <div className="wp-logo">
    <a href='https://wa.me/918412841282?text=Hello How can I help you?' target='_blank' rel='noopener noreferrer'>
      <img src={Whatsapp} width='60' alt='whatsapp' />
    </a>
  </div>
  )
}

export default Wpchat
