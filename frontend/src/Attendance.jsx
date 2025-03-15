import { useState, useEffect } from 'react';
import './Attendance.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Attendance() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    // Check for token on component mount
    const token = cookies.token || localStorage.getItem('token');
    if (!token) {
      alert("Login first by Head of Staff");
      navigate('/login');
    }
  }, [cookies.token, navigate]);

  const submitLocation = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    // Get token from cookies or localStorage as fallback
    const token = cookies.token || localStorage.getItem('token');
    
    if (!token) {
      alert("Session expired. Please login again.");
      navigate('/login');
      setIsSubmitting(false);
      return;
    }
    
    console.log("Using token:", token);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setLocation({ latitude, longitude });

          fetch('https://lms.fardin.space/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`
            },
            body: JSON.stringify({
              name,
              password, 
              latitude,
              longitude,
            }),
          })
          .then(response => response.json())
          .then((data) => {
            setIsSubmitting(false);
            
            if (data.status === 'exist') {
              navigate('/exist');
            } else if (data.status === 'success') {
              navigate('/success');
            } else if (data.status === 'noUser') {
              navigate('/failure', { state: { message: data.message, data: data.data } });
            } else if (data.status === "fail") {
              navigate('/failure', { state: { message: data.message, data: data.data } });
            } else if (data.status === "invalid token") {
              alert("Login first by Head of School");
              navigate('/login');
            }
          })
          .catch(error => {
            console.error('Error submitting location data:', error);
            setIsSubmitting(false);
            alert("Error submitting attendance. Please try again.");
          });
        },
        (error) => {
          console.error("Error getting user location:", error.message);
          setIsSubmitting(false);
          alert("Could not access your location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser");
      setIsSubmitting(false);
    }
  };

  return (
    <div className='Home'>
      <div className="attendance-container">
        <h1 className="school-title">জ্ঞানোদয় জাতীয় একাডেমী</h1>
        
        <div className="form-container">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              autoComplete="name"
              placeholder="Enter your name" 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
            />
          </div>
        </div>
        
        <div className="location-display">
          {location.latitude && location.longitude ? 
            `Location: ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : 
            "Your location will appear here"}
        </div>
        
        <button 
          className="submit-button" 
          onClick={submitLocation}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Attendance"}
        </button>
      </div>
    </div>
  );
}

export default Attendance;