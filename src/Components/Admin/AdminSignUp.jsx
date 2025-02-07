import React, { useState } from 'react'
import '../../Styles/AdminSignup.css'
import axios from 'axios';

export default function AdminSignUp() {
    let [admin,setAdmin] = useState({
        username : " ",
        email : " ",
        password : " ",
        phone : " "
    })

    
    let handleChange = (e) =>{
        let {name,value} = e.target;
        setAdmin((prevState) =>({
            ...prevState,
            [name]:value
        }));
    }
    console.log(admin);

    function addAdmin(){
        axios.post('http://localhost:1000/List_of_Admins',admin)
        .then((res)=>{
            console.log(res);
            alert("Admin Registered Success")
        })
        .catch((err)=>{
            console.log(err);
            alert("Not Registered")
        })
    }
  return (
    <div className='adminsignup'>
        <form action=" ">
            <label htmlFor="">Name :  </label>
            <input type="text" value={admin.username} name='username' onChange={handleChange} placeholder='Enter the Username' />
            <label htmlFor="">Email :  </label>
            <input type="text" value={admin.email} name='email' onChange={handleChange} placeholder='Enter the Email' />
            <label htmlFor="">Phone :  </label>
            <input type="text" value={admin.phone} name='phone' onChange={handleChange} placeholder='Enter the Phone' />
            <label htmlFor="password">Password :  </label>
            <input type="text" value={admin.password} name='password' onChange={handleChange} placeholder='Enter the Password' />
            
            <button onClick={addAdmin} className='btn fs-3 btn-info py=0'>Register</button>
        </form>
    </div>
  )
}
