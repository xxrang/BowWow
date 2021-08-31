import React from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({
  setHasAccessToken,
  hasAccessToken,
  loginHandler,
  setPostsData,
  setNavString,
  setIsLogedIn,
  isLogedIn,
}) {
  // curNav = { curNav };
  // selectNavHandler = { selectNavHandler };
  // handleTop = { handleTop };
  return (
    <>
      <NavBar
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
      />
      <Login
        loginHandler={loginHandler}
        setHasAccessToken={setHasAccessToken}
        setIsLogedIn={setIsLogedIn}
      />
      <Footer />
    </>
  );
}

export default LoginPage