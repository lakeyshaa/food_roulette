import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/v1/users/login", { email, password }).then((res) => {
      alert("Login successful");
      window.location='/search' 
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => {
      alert(err.response.data.error)
    })
  };

  return (
    <div>
      <div className="instructions">
      <h2>Step 1: Login</h2>
        <h2>Step 2: Enter Zip Code</h2>
        <h2>Step 3: Get Random Food</h2>
        </div>
      
      <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="heading">Login</h1>
        <p>
          <TextField
            variant="outlined"
          label="Email"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </p>
        <p>
        
          <TextField
          label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </p>
        <Button variant="contained" type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default Login;
