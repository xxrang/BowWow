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
  return (
    <>
      <NavBar />
      <Login
        loginHandler={loginHandler}
        setHasAccessToken={setHasAccessToken}
        hasAccessToken={hasAccessToken}
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <Footer />
    </>
  );
}

export default LoginPage