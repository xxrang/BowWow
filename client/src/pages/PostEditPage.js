import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import PostEdit from "../component/PostFormOrEdit/PostEdit";

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
      <PostEdit hasAccessToken={hasAccessToken} />
      <Footer />
    </>
  );
};

export default PostFormPage;
