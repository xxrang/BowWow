import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
  dataId,
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <ViewPost hasAccessToken={hasAccessToken} dataId={dataId} />
      <Footer />
    </div>
  );
}

export default ViewPostPage