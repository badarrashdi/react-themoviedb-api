import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">Logo</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul id="nav-mobile" className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/youtube">YouTube Search</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/movies">Movies Search</Link></li>
          </ul>
         
        </div>
      </nav>
    )
}

export default Nav;