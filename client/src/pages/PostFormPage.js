import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import PostForm from '../component/PostForm';

const PostFormPage = ({isLogedIn}) => {
  return <>
    <NavBar />
    <PostForm isLogedIn = {isLogedIn}/>
    <Footer />
  </>
}

export default PostFormPage;