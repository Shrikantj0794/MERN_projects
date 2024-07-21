import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

function Update() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    courses: [],
  });
  
  const { id } = useParams();

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    } else {
      setFormData(result);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        courses: checked
          ? [...prevFormData.courses, value]
          : prevFormData.courses.filter((course) => course !== value),
      }));
    } else if (type === 'radio') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      alert('Error updating user');
    } else {
      alert('User updated successfully');
    }
  };

  return (
    <div className="container mt-5 col-6">
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobileNo" className="form-label">Mobile No</label>
          <input
            type="tel"
            className="form-control"
            id="mobileNo"
            name="mobileNo"
            pattern="[0-9]{10}"
            value={formData.mobileNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">Designation</label>
          <select
            className="form-select"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          >
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
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="mca"
                name="courses"
                value="MCA"
                checked={formData.courses.includes('MCA')}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="mca">MCA</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="bca"
                name="courses"
                value="BCA"
                checked={formData.courses.includes('BCA')}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="bca">BCA</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="bsc"
                name="courses"
                value="BSC"
                checked={formData.courses.includes('BSC')}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="bsc">BSC</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Update;
