import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function List() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        const result = await response.json();
        console.error(result.error);
        alert('Error fetching data');
        return;
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching data');
    }
  };
  //delete user

  const handleDelete = async (id)=>{
    const response = await fetch(`http://localhost:5000/${id}`,{
      method: "DELETE"
    });
    const result = await response.json();
    if(!response.ok){
      console.log(result.error)
    }else{
      alert('Employee Removed')
      getData();
    }
  }
  //search query
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <div className="container mt-5">
       <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Total Count: {data.length}</span>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Create Employee</button>
      </div>
      <br/>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="flex-grow-1"></div>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobileNo}</td>
              <td>{item.designation}</td>
              <td>{item.gender}</td>
              <td>{item.courses}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>
                <Link to={`/${item._id}`}>
                <button className="btn btn-warning btn-sm me-2" >Edit</button>
                </Link>
                <Link>
                <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(item._id)}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
