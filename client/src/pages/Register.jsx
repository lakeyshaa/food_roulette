import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/users/register", { email, password })
      .then(res => {
        alert("Registration Successful");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  
    }
  return (
    <div>
      <h1>Create your Account</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="email"><h3>Email</h3></label><br />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default Register;
