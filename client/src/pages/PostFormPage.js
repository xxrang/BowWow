import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import PostForm from '../component/PostFormOrEdit/PostForm';

const PostFormPage = ({
  hasAccessToken,
  logoutHandler,
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
      <PostForm hasAccessToken={hasAccessToken} isLogedIn={isLogedIn} />
      <Footer />
    </>
  );
};

export default PostFormPage;