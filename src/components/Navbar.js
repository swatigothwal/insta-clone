import React from 'react'
import {Link} from 'react-router-dom'
import App from '../App'

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white" style={{color:"black"}}>
          <Link to="/" className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create post</Link></li>
         
          </ul>
        </div>
      </nav>
    
    )
}

export default NavBar;