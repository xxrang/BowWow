import React,{useState} from 'react'
import Login from '../Login'
import {StyledNavBar} from './StyledNavBar'
import {Link} from 'react-router-dom'

const NavBar = () => {

  const [modal , setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)  
    setModal((prev)=>!prev);
  }

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
          <Login loginModalClick = {loginModalClick} modal = {modal}>Login</Login>
          <Link to = '/signup'><button>Signup</button></Link>
        </div>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar
