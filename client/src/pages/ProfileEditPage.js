import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import ProfileEdit from '../component/SignupOrProfileEdit/ProfileEdit';

const ProfileEditPage = ({
  hasAccessToken,
  logoutHandler,
  postId,
  setPostId,
  setPostsData,
  setNavString,
  isLogedIn,
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
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