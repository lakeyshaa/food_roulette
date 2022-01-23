import React from 'react';

const Register = () => {
  return (
    <div>
      Register Here
      <form>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </p>
        <p>
        <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </p>
      </form>
    </div>
  )
};

export default Register;

