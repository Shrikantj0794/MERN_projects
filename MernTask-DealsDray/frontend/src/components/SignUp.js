import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
              <input 
              type="email" 
              className="form-control"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input 
              type="password" 
              className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
              <input 
              type="password" 
              className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
          <p>Already registered <Link className="text-blue-400" to='/'>sign in? </Link></p>
            
        </div>
      </div>
    </div>
  )
}

export default SignUp