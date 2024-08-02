import React from 'react'
import './Footer.css'
const Footer = () => {
  
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <hr />
      <p> Copyright © {year} | Sakshi Collection  </p>
      
    </div>
  )
}

export default Footer
