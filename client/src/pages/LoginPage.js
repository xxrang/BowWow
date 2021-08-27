import React from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({isLogedIn,loginHandler}) {

  return (
    <div>
      <NavBar isLogedIn = {isLogedIn} loginHandler = {loginHandler}/>
      <Login isLogedIn = {isLogedIn} loginHandler = {loginHandler}/>
      <Footer />
    </div>
  )
}

export default LoginPage
