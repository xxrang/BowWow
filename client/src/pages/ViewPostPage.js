import React from 'react'
import ViewPost from '../component/ViewPost'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function ViewPostPage({isLogedIn}) {
  return (
    <div>
      <NavBar/>
      <ViewPost isLogedIn = {isLogedIn}/>
      <Footer/>
    </div>
  )
}

export default ViewPostPage
