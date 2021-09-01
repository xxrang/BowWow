import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import Profile from '../component/Profile'

const ProfilePage = ({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
  isLogedIn,
  setIsLogedIn 
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn = {isLogedIn}
        setIsLogedIn ={setIsLogedIn}
      />
      <Profile 
      hasAccessToken={hasAccessToken} 
      isLogedIn = {isLogedIn}
      setIsLogedIn ={setIsLogedIn}/>
      <Footer />
    </>
  );
};

export default ProfilePage