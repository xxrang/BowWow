import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
  postId,
  isLogedIn,
  hasUserId,
  setHasUserId
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
      <ViewPost
        hasAccessToken={hasAccessToken}
        postId={postId}
        isLogedIn={isLogedIn}
        hasUserId = {hasUserId}
        setHasUserId={setHasUserId}
      />
      <Footer />
    </div>
  );
}

export default ViewPostPage