import React,{useState} from 'react'
import NeedLogin from '../NeedLogin'
import {StyledViewPostComment} from './StyledViewPost'
import {initialPosts} from '../dummyData'

function ViewPostComment(
  {inputRef,
  isLogedIn,
  hasAccessToken
  }) {
  const [openModal, setOpenModal] = useState(false)
  const closeModal = () => {
    setOpenModal((prev)=>!prev);
  }
  
  const addCommenthandler = (e) => {
    /*확인 후 바꾸기 */
      if (!isLogedIn) {
        submitCommentHandler(e,comment)
        setComment('')
      } else {
        setOpenModal(true);
      }
    }
  
  //코멘트
  const [comment,setComment] = useState('')
  //글자 100자 제한
  const limitText = (limit) => limit.length < 100
  const ChangeCommentHandler =(e)=>{
    const limitWord = e.target.value
    if(limitText(limitWord) && limitWord !== ''){
      setComment(limitWord)
    }
  }
  //코멘트 추가
  const comments = initialPosts.MainPosts[0].Comment
  const [commentList,setCommentList] = useState(comments)
  //코멘트 삭제위한 id역할의 숫자
  const [listNum,setListNum] = useState(1);

  const submitCommentHandler = (e,comment) => {
    //console.log('index'+comment)
    inputRef.current.focus();
    e.preventDefault();
    //const commentDummy = (initialPosts.MainPosts[0].Comment[0])
    //console.log(commentDummy)
    
    //axios.post('localhost4000',data) //코멘트데이터
    //axios.get('localhost4000',data) //코멘트데이터
    /*axios.post('localhost:4000',
    {
      id : '', comment : ''
    },{
      withCredentials : true,
    })
    .then((res)=>{
      console.log(res);
    })
    .then(()=>{

    })
    .catch((err)=>{
      console.log(err)
    })*/
    if(comment !== ''){
      setCommentList([
        {id : listNum ,nickname : comments[0].User.nickname,image : comments[0].User.image ,content : comment},...commentList
      ])
      setListNum(listNum+1);
    }else{
      //모달로 해야할..꽈 ?
      alert('댓글을 입력하세요.')
    }
  }

  //id 와 일치하지 않는값만 필터링.
  const removeCommentHandler = (e,delComment) => {
    const remove = commentList.filter((el)=>{
      return el.id !== delComment
    })
    setCommentList(remove)
  }

  return (
    
    <StyledViewPostComment>
      <div className = 'post-comment-form-wrapper'>
      <i className="fas fa-comment-dots"> 댓글 </i>

      <div className = 'flex-box'>
      <form >
        <textarea 
        ref = {inputRef} 
        onChange = {ChangeCommentHandler} 
        value = {comment}
        className = 'post-comment-text' 
        type = 'text' 
        placeholder = '100자 이내로 댓글 입력해주세요.'/>
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
                  {/*댓글은 댓글안에서만움직이므로 여기서! 전달해줄곳없다.*/}
                  <button 
                  onClick = {(e)=>removeCommentHandler(e,el.id)}
                  className ='remove-button'>삭제</button>
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

