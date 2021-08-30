import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProfileEdit from '../component/SignupOrProfileEdit/ProfileEdit';

const ProfileEditPage = ({ hasAccessToken, logoutHandler }) => {
  return (
    <>
      <NavBar hasAccessToken={hasAccessToken} logoutHandler={logoutHandler} />
      <ProfileEdit
        hasAccessToken={hasAccessToken}
      />
      <Footer />
    </>
  );
};

export default ProfileEditPage