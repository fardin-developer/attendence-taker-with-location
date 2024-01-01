import { useState } from 'react'
import './App.css';


function App() {

 const [location, setLocation] = useState({ latitude: null, longitude: null });
 const [name, setName] = useState('')

  const submitLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update state with location data
          setLocation({ latitude, longitude });

          // Submit the location data to the backend
          fetch('http://localhost:4000/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              latitude,
              longitude,
            }),
          })
          .then(response => response.json())
          .then(data => console.log('Location data submitted successfully:', data))
          .catch(error => console.error('Error submitting location data:', error));
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <div>
      <div className="from">
        <form action="">
          <label htmlFor="">name</label>
          <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} />
          {/* <br />
          <label htmlFor="">password</label>
          <input type="password" name="" id="" /> */}

        </form>
      </div>
      <div id="map">
        Latitude: {location.latitude}, Longitude: {location.longitude}
      </div>
      <button id="submitButton" onClick={submitLocation}>Submit Location</button>
    </div>
  );
};


export default App
