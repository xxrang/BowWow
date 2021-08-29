import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import Profile from '../component/Profile'

const ProfilePage = ({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
      />
      <Profile hasAccessToken={hasAccessToken} />
      <Footer />
    </>
  );
};

export default ProfilePage