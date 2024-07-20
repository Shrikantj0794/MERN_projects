import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [age, setAge] = useState('');
const naviate = useNavigate();

 const handleSubmit = async (e)=>{
    e.preventDefault();
    const userData = {name,email,age}

    const responce = await fetch('http://localhost:1729/', {
        method: 'POST',
        body: JSON.stringify(userData),
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
        setName('')
        setAge('')
        setEmail('')
        naviate('/read')
    }
 }

  return (
    <div className='container my-2'>
        <h2 className='text-center'> Enter the Data</h2>
        <form onSubmit={handleSubmit} className=' d-flex justify-content-center flex-column'>
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
  )
}

export default Create
