import React from 'react'
import {StyledViewPostComment} from './StyledViewPost'

function ViewPostComment({inputRef,comment,commentList,submitComment,handleChangeComment}) {
  
  return (
    <StyledViewPostComment>
      <div className = 'post-comment-form-wrapper'>
      <i class="fas fa-comment-dots"> 댓글 </i>

      <div className = 'flex-box'>
      <form >
        <textarea 
        ref = {inputRef} 
        onChange = {handleChangeComment} value = {comment}
        className = 'post-comment-text' 
        type = 'text' placeholder = '100자 이내로 댓글 입력해주세요.'/>
      </form>
      <button onClick = {submitComment}
      className = 'post-comment-text-submit'>입력</button>
      </div>
      
      <div className="list-item-scroll">
        {commentList.map((el)=>{
          return (
            <div key = {el.id} className = 'post-comment-wrapper'>
              <div className = 'post-comment-profile-wrapper'>
              <img className = 'profile-img' src = {el.image} alt= 'profile-img'/>
              <h4>대박 피곤한 숙영쓰</h4>
              </div>
              <ul>
                <li>{el.content}</li>
                </ul>
            </div>
          )
        })}
      </div>
      </div>
    </StyledViewPostComment>
  )
}

export default ViewPostComment


/*
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
*/