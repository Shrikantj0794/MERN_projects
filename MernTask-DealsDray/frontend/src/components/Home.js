import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '70vh' }}>
      <h3>Welcome Admin Panel</h3>
    <Link to={'/form'}>
    <button className='btn btn-primary'>Create Employee</button>
    </Link> 
    </div>
    </>
  )
}

export default Home
