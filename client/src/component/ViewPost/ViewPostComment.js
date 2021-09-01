import React, { useCallback, useState } from "react";
import NeedLogin from '../NeedLogin'
import useInput from '../../hooks/useInput'
import { StyledViewPostComment } from './StyledViewPost';
import axios from 'axios';
axios.default.withCredentials = true
// import userPic from "../../images/bros_blank.jpeg";

function ViewPostComment({
  inputRef,
  commentInfo,
  setCommentInfo,
  showButton,
  postId,
  userInfo,
  hasUserId
}) {

  const [comment, onChangeComment, setComment] = useInput("");
  // 모달
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal((prev) => !prev);
  };

  const addCommentHandler = useCallback((e) => {
      e.preventDefault();
      if(comment !==''){
        axios.get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,{
          headers: {
              accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
              refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
              },
          })
          .then((res)=>{
            const userData = {
              userId : res.data.data.userinfo,
              content : comment,
              postId : postId ,
            }
            // 잘 받아오면 userData 에 유저코멘트 정보를 담아주는거임. 이거를 포스트요청 보내.
            return axios.post( `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments`,
              userData,
            {
              headers: { "Content-Type": "application/json" },
            },)
            .then((res)=>{
              setComment("");
              return axios.get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${res.data.data.posts_id}`
              )
              .then((data)=>{
                // console.log(data);
                setCommentInfo(data.data.data.comment.reverse());
              })
              .catch((err)=>{
                console.log('comment 작성 후 get 요청 실패===', err)
              })
            })
            .catch((err)=>{
              console.log('post 요청 댓글 실패 ======' ,err)
            })
          })
        .catch((err)=>{
          console.log('댓글 auth 실패=======' , err)
        })
      }
});

  //댓글삭제
  const removeCommentHandler = useCallback((id,comment_id) => {
    // console.log(id,comment_id);
    // console.log('===삭제코멘트',commentId);
      return axios.get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
        {
          headers: {
            accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
            refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.userinfo) //2
        if(res.data.data.userinfo === id){
          return axios.delete(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${comment_id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
          )
          .then((res)=>{
            // console.log(res.data);
            // console.log(commentInfo)
            const filtered = commentInfo.filter(
              (comment) => comment_id !== comment.id
            );
            // console.log('filterd : ', filtered)
            setCommentInfo(filtered);
          })
          .catch((err)=>{
            console.log('remove comment오류',err)
          })
        }

      }).catch((err) => {
        console.log("remove오류",err);
      });
    },[commentInfo, setCommentInfo]);

  return (
    <StyledViewPostComment>
      <div className="post-comment-form-wrapper">
        <i className="fas fa-comment-dots"> 댓글 </i>

        <form
          className="flex-box"
          onSubmit={(e) => {
            addCommentHandler(e);
          }}
        >
          <textarea
            required
            ref={inputRef}
            type="text"
            name="comment"
            onChange={onChangeComment}
            value={comment}
            className="post-comment-text"
            placeholder="100자 이내로 댓글 입력해주세요."
          />

          <button className="post-comment-text-submit">입력</button>
        </form>

        <div className="list-item-scroll">
          <ul className="post-comment-wrapper">
            {commentInfo &&
              commentInfo.map((el) => {
                return (
                  <li key={el.id} className="post-comment-list">
                    <div className="post-commnet-flexbox">
                      <img
                        className="profile-img"
                        // src={el.user.image}
                        alt="img"
                      />
                      <div>
                        <p className="post-comment-nickname">
                          {el.user.nickname}
                        </p>
                        <p className="post-comment-date">
                          {el.updatedAt.split('T')[0].replaceAll('-','.')}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          removeCommentHandler(el.user_id, el.id);
                        }}
                        className="remove-button"
                      >
                        삭제
                      </button>
                    </div>
                    <div className="post-comment-content">{el.content}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <NeedLogin 
      openModal={openModal} 
      closeModal={closeModal}></NeedLogin>
    </StyledViewPostComment>
  );
}

export default ViewPostComment

