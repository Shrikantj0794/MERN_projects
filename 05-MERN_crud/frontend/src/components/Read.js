import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {
const [data, setData] = useState([]);

    async function  getData(){
        const responce = await fetch("http://localhost:1729");
        const result = await responce.json();

        if(!responce.ok){
            console.log(result.error)
        }
        if(responce.ok){
           setData(result)
           console.log(data)
        }
    }
//Delete data 
    const handleDelete = async (id)=>{
        const responce = await fetch(`http://localhost:1729/${id}`,{
            method: "DELETE"
        });
        const result = await responce.json();
        if(!responce.ok){
            console.log(result.error)
        }
        if(responce.ok){
            alert('Data Removed')
        }
    }

useEffect(() => {
    getData();
}, []);


  return (
    <div className='container my-2'>
    <h2 className='text-center'>All Data</h2>
        <div className='row'>
            <div className='col-3'>
            {data?.map((ell)=>(
            <div key={ell._id}className="card">
            <div className="card-body">
                <h5 className="card-title">{ell.name}</h5>
                <h6 className="card-subtitle mb-2">{ell.emial}</h6>
                <h6 className="card-subtitle mb-2">{ell.age}</h6>
                <a href="#" className="card-link"
                onClick={()=>handleDelete(ell._id)}>Delete</a>
                <Link to={`/${ell._id}`}>
                <a  className="card-link">Edit</a>
                </Link>
            </div>
            </div>
        ))}
            </div>
    </div>
    </div>
  )
}

export default Read
