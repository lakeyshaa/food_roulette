import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/v1/user/login", { email, password }).then((res) => {
      alert("Registration Successful");
      navigate('/login') //change this name and route at some point
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => {
      alert(err.response.data.error)
    })
  };

  return (
    <div>
      Login
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
