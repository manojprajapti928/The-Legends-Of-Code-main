// Admin.jsx
import React, { useState,useEffect } from 'react'
import axios from "axios"

export default function Admin() {

  // let [FormData,setFormData] = useState(
  
   
  // );

      
  async function SendData(FormData)
  {
    console.log(FormData)
    let Res = await axios.post("http://localhost:5100/api/addUser",{"FormData":FormData})
    console.log(Res.data)
  }

  function hendlesubmit(e){
    e.preventDefault();
        

    let UserData = {
      id : e.target[0].value,
      name: e.target[1].value,
      age: e.target[2].value,
      email: e.target[3].value,
      phone: e.target[4].value,
      salary: e.target[5].value,
    }
  
    // setFormData(UserData)
    SendData(UserData);
  }

  

  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={(e)=>{ hendlesubmit(e)}}>
        <input type="number" name="id" placeholder="Id"  required />
        <input type="text" name="name" placeholder="Name"  require />
        <input type="number" name="age" placeholder="Age"  required />
        <input type="email" name="email" placeholder="Email"  required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <input type="number" name="salary" placeholder="Salary"  required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}