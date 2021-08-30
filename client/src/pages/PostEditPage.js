import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import PostEdit from "../component/PostFormOrEdit/PostEdit";

const PostEditPage = ({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
  postId,
}) => {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
      />
      <PostEdit
        hasAccessToken={hasAccessToken}
        postId={postId}
      />
      <Footer />
    </>
  );
};

export default PostEditPage;
