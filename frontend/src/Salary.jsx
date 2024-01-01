import React, { useState } from 'react';
import './salary.css'; // Import the CSS file

const Months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const Salary = () => {
    const [smonth, setMonth] = useState();
    const [syear, setYear] = useState('2023');

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (smonth && syear) {
            const body = JSON.stringify({ month: smonth, year: syear });
            console.log(`Selected Month: ${Months[smonth]}, Year: ${syear}`);
            try {
                const response = await fetch('http://localhost:4000/salary', {
                    method: 'POST',
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json'
                    },
                    body: body,
                    cache: 'default'
                });
                if (response.ok) {
                    console.log('data sent success fully');
                }else{
                    console.log('failed to sent data');
                }
            } catch (error) {
                console.log(error);
            }
            
        } else {
            alert('Please select both month and year.');
        }
    }

    return (
        <form className="salary-form" onSubmit={handleSubmit}>
            <h1 className="salary-heading">Salary</h1>
            <label htmlFor="month" className="salary-label">Month:</label>
            <select id="month" value={smonth} onChange={handleMonthChange} className="salary-select">
                <option value="">Select Month</option>
                {Months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                ))}
            </select>

            {/* Example for year selection */}
            <label htmlFor="year" className="salary-label">Year:</label>
            <input type="number" id="year" value={syear} onChange={handleYearChange} className="salary-input" />

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default Salary;
