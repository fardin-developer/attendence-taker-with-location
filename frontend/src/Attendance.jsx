import { useState, useEffect } from 'react'
import './Attendance.css';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';



function Attendence() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [name, setName] = useState('');
  // const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const cookies = new Cookies();
  let cdata = cookies.get('token');
  useEffect(() => {
    if (!cdata) {
      alert("Login first by Head of Stuff")
      navigate('/login')
    }


  }, [])



  const submitLocation = () => {
    document.getElementById('submitButton').innerHTML = "Submiting ....."
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update state with location data
          setLocation({ latitude, longitude });

          // Submit the location data to the 
          fetch('https://lms.fardindev.me/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cdata.token
            },
            body: JSON.stringify({
              name,
              latitude,
              longitude,
            }),
          })
            .then(response => response.json())
            .then((data) => {
              // setMessage(data.message)
              console.log(data.error);
              if (data.status == 'exist') {
                navigate('/exist')
              } else if (data.status == 'success') {
                navigate('/success')
              } else if (data.status == 'noUser') {
                navigate('/failure', { state: { message: data.message, data: data.data } })
              } else if (data.status == "fail") {
                navigate('/failure', { state: { message: data.message, data: data.data } })
              } else if (data.status == "invalid token") {
                alert("Login first by Head of School")
                navigate('/login');
              }
            })
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
    <div className='Home'>
      <div>
        <div className="h1">
          <h1>জ্ঞানোদয় জাতীয় একাডেমী</h1>

        </div>

        <div className="form">
          <form action="">
            <div className="input">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" value={name} onChange={(e) => { setName(e.target.value) }} autoComplete="name" />
              <br />
              <label htmlFor="">Password</label>
              <input type="text" name="" id="" />
            </div>


          </form>
        </div>
        <div id="map">
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
        <button id="submitButton" onClick={submitLocation}>Submit Attendance</button>
        {/* <h1 style={{ color: "green",textAlign:"center" }}>{message}</h1> */}

      </div>


    </div>
  );

};


export default Attendence