import React from 'react'
import NavBar from '../component/NavBar'

function SearchPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
    </div>
  );
}

export default SearchPage