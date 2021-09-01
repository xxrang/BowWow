import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import PostForm from '../component/PostFormOrEdit/PostForm';

const PostFormPage = ({
  logoutHandler,
  setPostsData,
  setNavString,
  isLogedIn,
  setIsLogedIn,
  hasUserId,
}) => {
  return (
    <>
      <NavBar
        hasUserId={hasUserId}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
        setIsLogedIn={setIsLogedIn}
      />
      <PostForm
        hasUserId={hasUserId}
        isLogedIn={isLogedIn}
        setIsLogedIn={setIsLogedIn}
      />
      <Footer />
    </>
  );
};

export default PostFormPage;