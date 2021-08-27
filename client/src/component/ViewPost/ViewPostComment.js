import React,{useState} from 'react'
import {StyledViewPostComment} from './StyledViewPost'
import NeedLogin from '../NeedLogin'

function ViewPostComment(
  {inputRef,
  isLogedIn,
  commentList,
  submitCommentHandler,
  }) {
  const [openModal, setOpenModal] = useState(false)
  const closeModal = () => {
    setOpenModal((prev)=>!prev);
  }
  const addCommenthandler = (e) => {
      if (isLogedIn) {
        submitCommentHandler(e,comment)
        console.log('addcommenthandler:', comment)
      } else {
        setOpenModal(true);
      }
    }
  
  //코멘트
  const [comment,setComment] = useState('')
  //글자 100자 제한
  const limitText = (limit) => limit.length < 100
  const ChangeCommentHandler =(e)=>{
    //console.log(e.target.value);
    const limitWord = e.target.value
    if(limitText(limitWord) && limitWord !== ''){
      setComment(limitWord)
    }
  }

  return (
    
    <StyledViewPostComment>
      <div className = 'post-comment-form-wrapper'>
      <i className="fas fa-comment-dots"> 댓글 </i>

      <div className = 'flex-box'>
      <form >
        <textarea 
        ref = {inputRef} 
        onChange = {ChangeCommentHandler} value = {comment}
        className = 'post-comment-text' 
        type = 'text' placeholder = '100자 이내로 댓글 입력해주세요.'/>
      </form>
      <button
      onClick = {(e)=>{addCommenthandler(e)}}
      //로그인 상태면 submitCommentHandler : 아니면 Login 컴포넌트
      //onClick={login === false ? submitCommentHandler : needLoginHandler }
      className = 'post-comment-text-submit'>입력</button>
      </div>
      
      <div className="list-item-scroll">
      {commentList.map((el,idx)=>{
          return (
            <div key = {idx} className = 'post-comment-wrapper'>
              <div className = 'post-comment-profile-wrapper'>
              <img className = 'profile-img' src = {el.image} alt= 'profile-img'/>
              <h4>{el.nickname}</h4>
              </div>
              <ul>
                <li>{el.content}</li>
                </ul>
            </div>
          )
          })}
        </div>
      </div>
      <NeedLogin openModal = {openModal} closeModal = {closeModal} ></NeedLogin>
    </StyledViewPostComment>
  )
}

export default ViewPostComment


/*
{commentList.map((el,idx)=>{
          return (
            <div key = {idx} className = 'post-comment-wrapper'>
              <div className = 'post-comment-profile-wrapper'>
              <img className = 'profile-img' src = {el.User.image} alt= 'profile-img'/>
              <h4>{el.User.nickname}</h4>
              </div>
              <ul>
                <li>{el.content}</li>
                </ul>
            </div>
          )
        })}


      <NeedLogin
      modal = {modal}
      loginModalClick = {loginModalClick}
      />
*/