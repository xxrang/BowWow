import React, { useState,useRef,useEffect } from 'react'
import {StyledViewPost} from './StyledViewPost'
import ViewPostContent from './ViewPostContent'
import ViewPostComment from './ViewPostComment'
import dummySample from './dummySample'

function ViewPost() {

  const [comment,setComment] = useState('')
  const [commentList,setCommentList] = useState(dummySample)

  const limitText = (limit) => limit.length < 100
  const handleChangeComment =(e)=>{
    //console.log(e.target.value);
    const limitWord = e.target.value
    if(limitText(limitWord)){
      setComment(limitWord)
    }
  }
  const submitComment = (e) => {
    inputRef.current.focus();
    e.preventDefault();
    if(comment!==''){
      setCommentList([
        {content:comment,image:dummySample[0].image},...commentList
      ])
      setComment('')
      //console.log(commentList)
    }else{
      alert('댓글을 입력하세요')
    }
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
