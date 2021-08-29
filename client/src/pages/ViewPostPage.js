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
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
      />
      <ViewPost hasAccessToken={hasAccessToken} postId={postId} />
      <Footer />
    </div>
  );
}

export default ViewPostPage