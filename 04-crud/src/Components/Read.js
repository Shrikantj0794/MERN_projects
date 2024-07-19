import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {
    const [dataa, setdata] = useState([]);

//get used for fetch data from url 
const getdata= async ()=>{
    axios.get('https://669a31179ba098ed61feabf0.mockapi.io/crud/api/cruddata')
    .then((res)=>{
         console.log(res.data)
        setdata(res.data)
    })
}

//Now delete the data
function handleDelete(id){
    axios.delete(`https://669a31179ba098ed61feabf0.mockapi.io/crud/api/cruddata/${id}`)
    .then(()=>{
    getdata();
    })
}

//For update first stored data in localstorage
const setToLocalStorage = (id, name, email)=>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
}

//useeffect used for rerender page
useEffect(() => {
    getdata();
}, []);

  return (
    <div>
        <h2>Read Operation</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete User</th>
    </tr>
  </thead>
  {
    dataa.map((value)=>{
        return(
            <>
             <tbody>
            <tr>
            <th scope="row">{value.id}</th>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <Link to={'/update'}>
            <td><button className='btn btn-success'
            onClick={()=>{
                setToLocalStorage(
                    value.id,
                    value.name,
                    value.email
                )
            }}
            >Edit</button></td>
            </Link>
            <td><button className='btn btn-danger' onClick={()=> handleDelete(value.id)}>Delete</button></td>
            </tr>
            </tbody>
        </>
        )
    })
  }
    </table>
    <Link to={'/'}>
    <button className='btn btn-primary'>Create user</button>
    </Link>
    
    </div>
  )
}

export default Read
