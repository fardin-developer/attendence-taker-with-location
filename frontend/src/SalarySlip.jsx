import React, { useEffect, useState } from 'react';
import './salaryslip.css'
const Months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];


const SalarySlip = () => {
  const [salaryDetails, setSalaryDetails] = useState({})
  const handlePrint = () => {
    window.print();
  };
  useEffect(() => {
    const storedSalaryDetails = localStorage.getItem('salaryDetails');
    if (storedSalaryDetails) {
      setSalaryDetails(JSON.parse(storedSalaryDetails));
      console.log(JSON.parse(storedSalaryDetails));

    } else {
      console.log("not set");
    }

  }, []);
  let monthNumber = Number(salaryDetails.month) + 1;

  return (
    <>
      <button onClick={handlePrint}>Download</button>
      <div className="fullpage">
        <div className="main">
          <div className="header">
            <div className="left">
              <h1>Gyanudoi Jatiya Academy</h1>
              <p>Tagline in name</p>
            </div>
            <div className="right">
              <p>Payslip For the month </p>
              <h2>March 2023</h2>
            </div>
          </div>
          <hr />
          <div className="employdetails">
            <div className="leftdetails">
              <h2>Employee Summary</h2>
              <h3>Name: {salaryDetails.name}</h3>
              <h4>Employee ID:73428734y</h4>
            </div>
            <div className="rightdetails">
              <h2>Base salary:{salaryDetails.baseslary}</h2>
              <h2 style={{ color: "green" }}>Net Salary: {(salaryDetails.attendences > 0) ? salaryDetails.salary : 0}</h2>
              <h5>Bill Month:01-{monthNumber}-2024</h5>
            </div>
          </div>
          <hr />

          <div className="extraDetails">
            <div className="salary-details-container">
              <h2>Salary Details</h2>
              <table className="salary-table">
                <thead>
                  <tr>
                    <th>Details</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Attendance + Holiday</td>
                    <td>{salaryDetails.attendences} + {salaryDetails.sunday}</td>
                  </tr>
                  <tr>
                    <td>Absent</td>
                    <td>{30 - (salaryDetails.attendences + salaryDetails.sunday)}</td>
                  </tr>
                  <tr>
                    <td>Late time in minutes</td>
                    <td>{salaryDetails.lateTimeCount} Minutes</td>
                  </tr>
                  <tr>
                    <td>Late time salary deduction</td>
                    <td style={{color:"red"}}>{salaryDetails.lateTimeSalary} inr</td>
                  </tr>
                  <tr>
                    <td>Absent salary deduction</td>
                    <td style={{color:"red"}}>{(30 - (salaryDetails.attendences + salaryDetails.sunday))*salaryDetails.baseslary/30} inr</td>
                  </tr>
                  <tr>
                    <td>Day Salary</td>
                    <td>{salaryDetails.baseslary / 30}</td>
                  </tr>
                  <tr>
                    <td>Base Salary</td>
                    <td>{salaryDetails.baseslary}</td>
                  </tr>
                  <tr>
                    <td>Deducted Salary</td>
                    <td>{(30 - (salaryDetails.attendences + salaryDetails.sunday))*salaryDetails.baseslary/30} inr + {salaryDetails.lateTimeSalary} inr</td>
                  </tr>
                  <tr>
                    <td>Net Salary</td>
                    <td>{(salaryDetails.attendences > 0) ? salaryDetails.salary : 0}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
          </div>
          <div className="note">
            <p>*Day salary = total salary/30</p>
            <p>*Net salary = base salary - deducted salary</p>
            <p>*Holidays attendences are free and you will get payment for that day</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default SalarySlip