import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
//import UserLogin from "./Components/User/UserLogin";
import 'mdb-ui-kit/css/mdb.min.css';
import MDBUserLogin from "./Components/User/MDBUserLogin";
// import {ToastContainer} from "react-toast" ;
import AdminSignUp from "./Components/Admin/AdminSignUp";
import './Database/data.json';
import { toast } from 'react-toastify';
import AdminHomePage from "./Components/Main/AdminHomePage"
import ErrorPage from "./Components/Main/ErrorPage"



function App() {
  return (
        <React.Fragment>
            <BrowserRouter>
            {/* <ToastContainer/> */}
            {toast}
            <Routes>
                <Route path="/*" element={<ErrorPage/>}/>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/userlogin" element={<MDBUserLogin/>} />
                <Route path="/adminsignup" element={<AdminSignUp/>} />
                <Route path="/adminhomepage/*" element={<AdminHomePage />}/>
            </Routes>
            </BrowserRouter>
        </React.Fragment>
  )
}
export default App;