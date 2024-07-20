import { useState, useEffect } from 'react';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

//geting single user data
    const getSingleUser= async ()=>{
        const responce= await fetch(`http://localhost:1729/${id}`)
        const result = await responce.json();

        if(!responce.ok){
            console.log(result.error)
        }
        if(responce.ok){
            setName(result.name)
            setEmail(result.email)
            setAge(result.age)
        }
    }
//send updated data to backend

const handleEdit = async (e)=>{
    e.preventDefault();
    const updatedData = {name,email,age}

    const responce = await fetch(`http://localhost:1729/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers:{
            "Content-Type": "application/json",
        }
    })
    const result = await responce.json();

    if(!responce.ok){
        console.log(result.error)
    }
    if(responce.ok){
        console.log(result)
       
        navigate('/read')
    }
}

    useEffect(() => {
        getSingleUser();
    }, []);

  return (
    <div>
      <div className='container my-2'>
        <h2 className='text-center'> Edit Data</h2>
        <form onSubmit={handleEdit} className=' d-flex justify-content-center flex-column'>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" 
                className="form-control"
                value={name}
                onChange={((e)=>setName(e.target.value))}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" 
                className="form-control"
                value={email}
                onChange={((e)=>setEmail(e.target.value))}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Age</label>
                <input type="number" 
                className="form-control"
                value={age}
                onChange={((e)=>setAge(e.target.value))}/>
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
        
            </form>
    </div>
    </div>
  )
}

export default Update
