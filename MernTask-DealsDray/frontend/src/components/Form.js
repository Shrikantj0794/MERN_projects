import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    courses: [],
  });
  
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        courses: checked
          ? [...prevData.courses, value]
          : prevData.courses.filter(course => course !== value),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        body:JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const result = await response.json();
        console.log(result.error);
        alert('Form Submitted successfully')
      } else {
        const result = await response.json();
        console.log(result);
        navigate('/list')
      }
      setFormData({
        name: '',
        email: '',
        mobileNo: '',
        designation: '',
        gender: '',
        courses: [],
      })
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      const radios = document.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
      radio.checked = false;
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5 col-6">
      <form className="needs-validation mb-3" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNo" className="form-label">Mobile No</label>
          <input type="tel" className="form-control" id="mobileNo" name="mobileNo" pattern="[0-9]{10}" value={formData.mobileNo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">Designation</label>
          <select className="form-select" id="designation" name="designation" value={formData.designation} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={handleChange} required />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={handleChange} required />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="mca" name="courses" value="MCA" onChange={handleChange} />
              <label className="form-check-label" htmlFor="mca">MCA</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="bca" name="courses" value="BCA" onChange={handleChange} />
              <label className="form-check-label" htmlFor="bca">BCA</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="bsc" name="courses" value="BSC" onChange={handleChange} />
              <label className="form-check-label" htmlFor="bsc">BSC</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
