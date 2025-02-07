import React from 'react'
import '../../Styles/AdminSideBar.css'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () =>{
    return (
        <div className='AdminSidebar'>
            <NavLink to='/adminhomepage/dashboard'>Dashboard</NavLink>
            <NavLink to='/adminhomepage/addbus'>Add Bus</NavLink>
            <NavLink to='/'>Logout</NavLink>
        </div>
    )
}
export default AdminSideBar