import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Update() {
    const navigate = useNavigate();
    //fetch data from localstorage
    const [id, setid] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setid(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, []);

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://669a31179ba098ed61feabf0.mockapi.io/crud/api/cruddata/${id}`,
        {
            name: name,
            email: email,
        }
    )
    .then(()=>{
        navigate('/read')
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log('done')
}
  return (
    <>
       <h3>Update</h3>
        <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" 
            className="form-control" 
            id="exampleInputEmail1" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
            <label className="form-label">Emial address</label>
            <input type="email" 
            className="form-control" 
            id="exampleInputPassword1" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
         />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
        </form>
        
    </>
  )
}

export default Update
