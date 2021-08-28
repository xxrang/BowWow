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
    /*확인 후 바꾸기 */
      if (!isLogedIn) {
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
        <ul className = 'post-comment-wrapper'>
          {commentList.map((el,idx)=>{
            return (
              <li key = {idx} className = 'post-comment-list'>
                <div className = 'post-commnet-flexbox'>
                  <img className = 'profile-img' src = {el.image} alt= 'img'/>
                  <div>
                    <p className = 'post-comment-nickname'>{el.nickname}</p>
                    <p className = 'post-comment-date'>2021.08.28</p>
                  </div>
                  <button className ='remove-button'>삭제</button>
                </div>
                <div className = 'post-comment-content'>
                  {el.content}
                </div>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
      <NeedLogin openModal = {openModal} closeModal = {closeModal} ></NeedLogin>
    </StyledViewPostComment>
  )
}

export default ViewPostComment


/*

  <div key = {idx} className = 'post-comment-profile-wrapper'>
      <img className = 'profile-img' src = {el.image} alt= 'profile-img'/>
      <h4>{el.nickname}</h4>
      <p>2021.08.28</p>
      <button>삭제</button>
      <li>{el.content}</li>
  </div>
*/

