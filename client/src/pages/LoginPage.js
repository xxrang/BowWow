import React from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({
  setHasAccessToken,
  hasAccessToken,
  loginHandler,
  setPostsData,
  setPostsString,
}) {
  // curNav = { curNav };
  // selectNavHandler = { selectNavHandler };
  // handleTop = { handleTop };
  return (
    <>
      <NavBar
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <Login
        loginHandler={loginHandler}
        setHasAccessToken={setHasAccessToken}
        hasAccessToken={hasAccessToken}
      />
      <Footer />
    </>
  );
}

export default LoginPage
