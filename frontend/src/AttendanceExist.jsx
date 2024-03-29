import React from 'react'
import './AttendanceExist.css'
import { useNavigate } from 'react-router-dom'


const AttendanceExist = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000)
  return (
    <div className='exist-container'>
      <div className='exist-box'>
        <div className='tick-mark-container'>
          <div
            className='ex-mark'
            style={{ color: 'green', backgroundColor: 'white' }}
          >
            &#10003;
          </div>
        </div>
        <h1>Already Recorded</h1>
        <p>Your attendance has already been recorded for today.</p>
        {/* You can add more information or buttons if needed */}
      </div>
    </div>
  )
}

export default AttendanceExist
