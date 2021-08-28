import React from 'react'
import NavBar from '../component/NavBar'
import Volunteer from '../component/Volunteer'
import Footer from '../component/Footer'

function VolunteerPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default VolunteerPage
