import React from 'react'
import NavBar from '../component/NavBar';
import Login from '../component/Login';
import Footer from '../component/Footer';

function LoginPage({
  loginHandler,
  setPostsData,
  setNavString,
  setIsLogedIn,
  isLogedIn,
  setHasUserId,
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
        setIsLogedIn={setIsLogedIn}
        setHasUserId={setHasUserId}
      />
      <Footer />
    </>
  );
}

export default LoginPage