import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Login() {

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
              <input 
              type="text" 
              className="form-control"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input 
              type="password" 
              className="form-control"/>
            </div>
            <Link to={'/home'}>
            <button type="submit" className="btn btn-primary">Login</button>
            
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login