import React from 'react'
import {StyledNavBar} from './StyledNavBar'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <div className = 'leftNav'>
          <Link to = '/'><img src = '../images/logo.png' alt= 'logo img'/></Link>
          <Link to = '/'><li>Home</li></Link>
          <Link to = '/search'><li>Search</li></Link>
          <Link to = '/volunteer'><li>Volunteer</li></Link>
        </div>
        
        <div className = 'rightNav'>
          <button>Login</button>
          <Link to = '/signup'><button>Signup</button></Link>
        </div>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar
