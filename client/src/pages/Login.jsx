import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
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
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="email"><h3>Email</h3></label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </p>
        <p>
          <label htmlFor="password"><h3>Password</h3></label>
          <input
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
