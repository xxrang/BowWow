import React from 'react'
import Main from '../component/Main'
import NavBar from '../component/NavBar'
import Service from '../component/Service'
import Footer from '../component/Footer'

function HomePage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) {
  
  return (
    <>
      <Main />
      <NavBar hasAccessToken={hasAccessToken} logoutHandler={logoutHandler}
  setPostsData = { setPostsData }
  setPostsString = { setPostsString } />
      <Service />
      <Footer />
    </>
  );
}

export default HomePage
