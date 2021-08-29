import React from 'react'
import NavBar from '../component/NavBar';
import Signup from '../component/SignupOrProfileEdit/Signup';
import Footer from '../component/Footer';

function SignUpPage({ setPostsData, setNavString }) {
  return (
    <>
      <NavBar setPostsData={setPostsData} setNavString={setNavString} />
      <Signup />

      <Footer />
    </>
  );
}

export default SignUpPage