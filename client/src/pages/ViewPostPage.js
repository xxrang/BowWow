import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({isLogedIn}) {
  return (
    <div>
      <NavBar/>
      <ViewPost isLogedIn = {isLogedIn}/>로그인핸들러추가
      <Footer/>
    </div>
  )
}

export default ViewPostPage
