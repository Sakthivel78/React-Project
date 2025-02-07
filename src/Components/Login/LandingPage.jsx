import React from "react"; 
import { Link } from 'react-router-dom'
import admin from '../../Assets/admin.png'
import user from '../../Assets/user.png'
import  '../../Styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div className="LandingPage">

      <Link className="anchor" to='/adminlogin'><h1>AdminLogin</h1>
        <img src={admin} className="adminImage"></img>
        <br />
      {/* <span >Admin Login </span> */}
      </Link>
   
      <Link className="anchor" to='/userlogin'><h1>UserLogin</h1>
      <img src={user} className="userImage"></img>
        <br />
      {/* <span >User Login </span> */}
      </Link> 
    </div>
  )
}
