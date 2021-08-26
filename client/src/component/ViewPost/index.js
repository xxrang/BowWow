import React, { useState,useRef,useEffect } from 'react'
import {StyledViewPost} from './StyledViewPost'
import ViewPostContent from './ViewPostContent'
import ViewPostComment from './ViewPostComment'
import dummySample from './dummySample'

function ViewPost() {

  const [comment,setComment] = useState('')
  const [commentList,setCommentList] = useState(dummySample)

  const handleChangeComment =(e)=>{
    //console.log(e.target.value);
    setComment(e.target.value);
  }
  const submitComment = (e) => {
    inputRef.current.focus();
    e.preventDefault();
    setCommentList([comment,...commentList])
    setComment('')
    console.log(comment);
    console.log(commentList)
  }
  
  //useRef 등록
  const inputRef = useRef();
  //useEffect
  useEffect(()=>{
    inputRef.current.focus();
  })
  
  return (
    <StyledViewPost>
      <ViewPostContent/>
      <ViewPostComment 
      inputRef = {inputRef}
      submitComment = {submitComment} 
      comment = {comment} 
      commentList = {commentList}
      handleChangeComment = {handleChangeComment}/>
    </StyledViewPost>
  )
}

export default ViewPost
