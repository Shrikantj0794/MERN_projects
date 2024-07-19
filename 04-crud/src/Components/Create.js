import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Create() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const datasubmit= (e)=> {
        e.preventDefault();
        //CRUD - Create completed post used for create
        axios.post(
            'https://669a31179ba098ed61feabf0.mockapi.io/crud/api/cruddata',
            {
                name: name,
                emial: email,
            }
        )
        console.log('data submited');
    }

  return (
    <>
    <h3>Create User</h3>
<form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1"
    onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Emial address</label>
    <input type="email" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={datasubmit}>Submit</button>
</form>
    </>
  )
}

export default Create
