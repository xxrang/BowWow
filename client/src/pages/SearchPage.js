import React from 'react'
import NavBar from '../component/NavBar'

function SearchPage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
}) {
  return (
    <div>
      <NavBar
        hasAccessToken={hasAccessToken}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
      />
    </div>
  );
}

export default SearchPage