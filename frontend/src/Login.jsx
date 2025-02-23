import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [cookies, setCookie] = useCookies(['token']);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);

    let apiUrl = "https://lms.fardin.space/admin/login";
    const formData = {
      username: username,
      password: password,
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())

      .then((data) => {
        console.log(data);
        if (data.message=='tokenSuccess') {
          navigate('/');
        }else{
          setMsg(data.message)
          alert(data.message)
        }
        setCookie('token', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };



  return (
    <>
      <div className="fullLoginPage">
        <div className="login-container">
          <h2>Master Login</h2>
          <p style={{textAlign:"center"}}>Only for head of the School/stuff</p>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <h3 style={{textAlign:"center",fontSize:"medium",color:"red"}}>{(msg?msg:'')}</h3>
          </form>
        </div>
      </div>

    </>

  );
};

export default Login;
