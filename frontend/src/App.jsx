import React from 'react'
import Attendance from './Attendance.jsx'
import Salary from './Salary.jsx';
import SalarySlip from './SalarySlip.jsx';
import AttendanceExist from './AttendanceExist.jsx';
import Success from './Success.jsx';
import Failure from './Failure.jsx';
import NavBar from './Navbar.jsx';
import Login from './Login.jsx'
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Attendance />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/exist' element={<AttendanceExist />} />
                    <Route path='/success' element={<Success/>}/>
                    <Route path='/failure' element={<Failure/>}/>
                    <Route path='/salary' element={<Salary />} />
                    <Route path='/salary-slip' element={<SalarySlip />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

