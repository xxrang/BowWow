import React from 'react'
import {StyledViewPostComment} from './StyledViewPost'

function ViewPostComment({inputRef,comment,commentList,submitComment,handleChangeComment}) {
  
  console.log(commentList)
  return (
    <StyledViewPostComment>
      <div className = 'post-comment-form-wrapper'>
      <i class="fas fa-comment-dots"> 댓글 </i>

      <div className = 'flex-box'>
      <form onSubmit = {submitComment}>
        <textarea 
        ref = {inputRef} 
        onChange = {handleChangeComment} value = {comment}
        className = 'post-comment-text' 
        type = 'text' placeholder = '댓글 입력...'/>
      </form>
      <button onClick = {submitComment}
      className = 'post-comment-input-submit'>입력</button>
      </div>
      
      {commentList.map((el)=>{
        return (
          <>
          <div key = {el.id} className = 'post-comment-wrapper'>
            <div className = 'post-comment-profile-wrapper'>
              <img className = 'profile-img' src = {el.image} alt= 'profile-img'/>
              <h4>닉네임</h4>
            </div>
          <ul>
            <li>{comment}</li>
          </ul>
          </div>
          </>
        )
      })}
      </div>
    </StyledViewPostComment>
  )
}

export default ViewPostComment


/*
<div className = 'post-comment-wrapper'>
        <div className = 'post-comment-profile-wrapper'>
          <img className = 'profile-img' src = '' alt= 'profile-img'/>
          <h4>닉네임</h4>
        </div>
          <ul>
            <li key = {idx}>{el}</li>
          </ul>
      </div>
*/