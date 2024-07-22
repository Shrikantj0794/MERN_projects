import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const storedUsers = [
    { username: 'root1', password: '123456' },
    { username: 'root2', password: '123456' },
    { username: 'root3', password: '123456' },
    { username: 'roo4', password: '123456' },
    { username: 'root5', password: '123456' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate('/home'); // redirect to the home page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5 col-6">
      <form onSubmit={handleLogin} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
