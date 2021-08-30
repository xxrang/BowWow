import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProfileEdit from '../component/SignupOrProfileEdit/ProfileEdit';

const ProfileEditPage = ({
  hasAccessToken,
  logoutHandler,
  postId,
  setPostId,
}) => {
  return (
    <>
      <NavBar hasAccessToken={hasAccessToken} logoutHandler={logoutHandler} />
      <ProfileEdit
        hasAccessToken={hasAccessToken}
        postId={postId}
        setPostId={setPostId}
      />
      <Footer />
    </>
  );
};

export default ProfileEditPage