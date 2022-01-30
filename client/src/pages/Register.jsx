import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

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
        <div className="instructions">
      <h2>Step 1: Login</h2>
        <h2>Step 2: Enter Zip Code</h2>
        <h2>Step 3: Get Random Food</h2>
        </div>
      <form  className="formBox" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="heading">Create your Account</h2>
        <p>
          <TextField
            label="Email"
            size="small"
            variant="outlined"
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
            variant="outlined"
            size="small"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </p>
        <Button className="signUp" variant="contained" type="contained">Sign Up</Button>
      </form>
    </div>
  )
};

export default Register;
