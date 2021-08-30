import React,{ useState } from 'react'
import NeedLogin from '../NeedLogin'
import useInput from '../../hooks/useInput'
import {StyledViewPostComment} from './StyledViewPost'
import {initialPosts} from '../dummyData'

function ViewPostComment({
  inputRef,
  isLogedIn,
  commentUserInfo,
  setCommentUserInfo,
  showButton,
  }) {
  //코멘트 더미
  const comments = initialPosts.service[0].Comment
  //초기 코멘트  
  const [comment, onChangeComment , setComment] = useInput("");
  // 모달
  const [openModal, setOpenModal] = useState(false)
  const closeModal = () => {
    setOpenModal((prev)=>!prev);
  }
  //코멘트 삭제위한 id역할의 숫자
  const [listNum,setListNum] = useState(3);
  const addCommentHandler = (comment) => {
    if(isLogedIn){
      if(comment !== ''){
        setCommentUserInfo([
          {id : listNum ,
          nickname : comments[0].User.nickname,
          image : comments[0].User.image ,
          content : comment},...commentUserInfo
        ])
        setListNum(listNum+1);
        setComment(comment)
        setComment('')
      }else{
        //모달로 해야할..꽈 ?
        alert('댓글을 입력하세요.')
      }
    }else{
      setOpenModal(true);
    }
  }
  //id 와 일치하지 않는값만 필터링.
  const removeCommentHandler = (e,delComment) => {
    /* 
    axios.delete("http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments")
      ,doby 부분 : {
        comment : 
      }
      ,{
        withCredentials: true
      }
      .then((res) => {
        console.log(삭제되었습니다.)
      })
      .catch(err => {
        console.log(err);
        alert('게시글 삭제에 실패했습니다.')
      })
    */
    const remove = commentUserInfo.filter((el)=>{
      return el.id !== delComment
    })
    setCommentUserInfo(remove)
  }

  return (
    <StyledViewPostComment>
      <div className="post-comment-form-wrapper">
        <i className="fas fa-comment-dots"> 댓글 </i>

      <div className = 'flex-box'>
        <textarea 
        required
        ref = {inputRef} 
        type = 'text' 
        name="comment"
        onChange = {onChangeComment} 
        value = {comment}
        className = 'post-comment-text' 
        placeholder = '100자 이내로 댓글 입력해주세요.'/>
      
      <button
      onClick = {()=>addCommentHandler(comment)}
      className = 'post-comment-text-submit'>입력</button>
      </div>
      
      <div className="list-item-scroll">
        <ul className = 'post-comment-wrapper'>
          {commentUserInfo.map((el,idx)=>{
            return (
              <li key = {idx} className = 'post-comment-list'>
                <div className = 'post-commnet-flexbox'>
                  <img className = 'profile-img' src = {el.image} alt= 'img'/>
                  <div>
                    <p className = 'post-comment-nickname'>{el.nickname}</p>
                    <p className = 'post-comment-date'>2021.08.28</p>
                  </div>

                  { showButton ?
                  <button 
                  onClick = {(e)=>removeCommentHandler(e,el.id)}
                  className ='remove-button'>삭제</button>
                  :
                  null
                  }
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
      <NeedLogin openModal={openModal} closeModal={closeModal}></NeedLogin>
    </StyledViewPostComment>
  );
}

export default ViewPostComment

