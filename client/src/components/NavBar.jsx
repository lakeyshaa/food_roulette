import { Button } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";


function NavBar() {
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav>
      <ul className="navBar">
        <li className="homeLink">
          <Button variant="contained" href="/">Home</Button>
        </li>
        {isLoggedIn ? (
          <>
          <li>
            <Button  variant="contained" href="/" onClick={() => handleLogout()}
            > Log Out
            </Button>
          </li>
          <li>
            <Button  variant="contained" href="/search">
              Search 
            </Button>
          </li>
          </>
        ) : (
          <>
            <li>
              <Button variant="contained" href="/register">Register</Button>
            </li>
            <li>
              <Button variant="contained" href="/login">Login</Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
