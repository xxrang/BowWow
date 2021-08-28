import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import PostForm from '../component/PostFormOrEdit/PostForm';

const PostFormPage = ({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <PostForm />
      <Footer />
    </>
  );
};

export default PostFormPage;