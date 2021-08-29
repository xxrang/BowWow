import React from 'react'
import NavBar from '../component/NavBar'

function SearchPage({
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
    </>
  );
}

export default SearchPage