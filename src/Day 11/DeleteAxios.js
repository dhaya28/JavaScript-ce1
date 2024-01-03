import axios from 'axios';
import React, { useState } from 'react'

export default function PutAxios() {
    const[name,setName]=useState('');
    const handleName=(event)=>{setName(event.target.value)}
    const handleSubmit=(event)=>
    {
        event.preventDefault();
        axios.delete('http://localhost:3001/user',{name}) //use tilt symbol
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occured"+error)})
    }

  return (
    <div>
      <h1>Axios put</h1>
      <form onSubmit={handleSubmit}>
       <input type='text' value={name} onChange={handleName}></input>
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
