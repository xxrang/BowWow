import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) {
  return (
    <>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <ViewPost hasAccessToken={hasAccessToken} />
      <Footer />
    </>
  );
}

export default ViewPostPage