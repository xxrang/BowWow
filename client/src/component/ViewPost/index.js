import React, { useState,useRef,useEffect } from 'react'
import {StyledViewPost} from './StyledViewPost'
import ViewPostContent from './ViewPostContent'
import ViewPostComment from './ViewPostComment'
import axios from 'axios'

function ViewPost({hasAccessToken}) {

  const needLoginHandler = () => {
    console.log('no')
  }
  //모달
  const [modal , setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)  
    setModal((prev)=>!prev);
  }
  //useRef 등록
  const inputRef = useRef();
  //useEffect
  useEffect(()=>{
    inputRef.current.focus();
  })
  
  return (
    <StyledViewPost>
      <ViewPostContent 
      hasAccessToken={hasAccessToken}/>
      <ViewPostComment 
      inputRef = {inputRef}
      modal = {modal}
      needLoginHandler = {needLoginHandler}
      loginModalClick = {loginModalClick}
      hasAccessToken={hasAccessToken}
      />
    </StyledViewPost>
  )
}

export default ViewPost
