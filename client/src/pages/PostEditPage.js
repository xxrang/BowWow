import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import PostEdit from "../component/PostFormOrEdit/PostEdit";

const PostEditPage = ({
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
      <PostEdit hasAccessToken={hasAccessToken} />
      <Footer />
    </>
  );
};

export default PostEditPage;
