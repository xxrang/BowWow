import React, { useState,useRef,useEffect } from 'react'
import {StyledViewPost} from './StyledViewPost'
import ViewPostContent from './ViewPostContent'
import ViewPostComment from './ViewPostComment'
import {initialPosts} from '../dummyData'
//import { initialState } from '../dummyData'

function ViewPost({isLogedIn}) {

  const needLoginHandler = () => {
    console.log('no')
  }
  //모달
  const [modal , setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)  
    setModal((prev)=>!prev);
  }

  //코멘트 추가
  const [commentList,setCommentList] = useState(initialPosts.MainPosts[0].Comment)
  //console.log(commentList)
  
  const submitCommentHandler = (e,comment) => {
    console.log('index'+comment)
    inputRef.current.focus();
    e.preventDefault();
    //const commentDummy = (initialPosts.MainPosts[0].Comment[0])
    //console.log(commentDummy)
    
    //axios.post('localhost4000',data) //코멘트데이터
    //axios.get('localhost4000',data) //코멘트데이터
    
    
    setCommentList([
      {id :1 ,nickname : '숙영',image : '' ,content : comment},...commentList
    ])
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
      submitCommentHandler = {submitCommentHandler} 
      isLogedIn={isLogedIn}
      modal = {modal}
      needLoginHandler = {needLoginHandler}
      loginModalClick = {loginModalClick}
      commentList = {commentList}
      />
    </StyledViewPost>
  )
}

export default ViewPost
