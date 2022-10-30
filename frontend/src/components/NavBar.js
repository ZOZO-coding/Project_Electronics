import React from "react";
import { Link } from "react-router-dom";
import { logOut } from '../utilities/users-service'

function NavBar() {
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/">
        <button type="button" class="btn btn-light">Home</button>  
        </Link> 
        <Link to="/about">
        <button type="button" class="btn btn-light">About</button>
        </Link>
        <Link to="/add">
        <button type="button" class="btn btn-light">Add Item</button>
        </Link>
        <Link to="/used">
        <button type="button" class="btn btn-light">Used Item</button>
        </Link>
        <button type="button" class="btn btn-light" onClick={logOut}>Log Out</button>
      </nav>
    </div>
  );
}

export default NavBar;
