import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Salary from './Salary.jsx';
import SalarySlip from './SalarySlip.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/salary' element={<Salary />} />
        <Route path='/salary-slip' element={<SalarySlip />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
