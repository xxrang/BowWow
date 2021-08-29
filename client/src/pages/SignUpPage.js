import React from 'react'
import NavBar from '../component/NavBar';
import Signup from '../component/SignupOrProfileEdit/Signup';
import Footer from '../component/Footer';

function SignUpPage({ setPostsData,setPostsString }) {
  return (
    <>
      <NavBar
        setPostsData={setPostsData}
        setPostsString={setPostsString}
      />
      <Signup />

      <Footer />
    </>
  );
}

export default SignUpPage