import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ps-3 pe-3" >
        <div className="container-fluid">
          <a className="navbar-brand">MERN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/home'} className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list'} className="nav-link">Employee List</Link>
              </li>
            </ul>
            <div className="ms-auto">
              <Link to={'/'}>
              <button className="btn btn-outline-success" type="submit">Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
