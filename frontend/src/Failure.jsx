import React from 'react'
import './Failure.css' // Import your CSS file for styling
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Failure = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const message = state?.message || 'An error occurred.'
  const data = state?.data || 'An error occurred.'
  setTimeout(() => {
    navigate('/')
  }, 10000)
  return (
    <div className='failure-container'>
      <div className='failure-box'>
        <div className='cross-mark'>&#10008;</div>
        <h2>{message}</h2>
        <p>{data}.</p>

        {/* You can add more information or buttons if needed */}
        <button className='home-button-failure' onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  )
}

export default Failure
