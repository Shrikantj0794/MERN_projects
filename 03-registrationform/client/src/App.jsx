import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
