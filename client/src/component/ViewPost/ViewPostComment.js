import React, { useCallback, useState } from "react";
import useInput from '../../hooks/useInput'
import { StyledViewPostComment } from './StyledViewPost';
import axios from 'axios';
import Modal from "../Modal";
axios.default.withCredentials = true
// import userPic from "../../images/bros_blank.jpeg";

function ViewPostComment({
  inputRef,
  commentInfo,
  setCommentInfo,
  postId,
  userId,
  isLogedIn
}) {
  
  const [comment, onChangeComment, setComment] = useInput("");
  // 모달
  const [openModal, setOpenModal] = useState(false);
  const [modalSuccess , setModalSuccess] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  const addCommentHandler = useCallback(
    async (e) => {
      e.preventDefault();

      if (comment !== "") {
        const userData = {
          userId: userId,
          content: comment,
          postId: postId,
        };
        // console.log("userData", userData);
        return await axios
          .post(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments`,
            userData,
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            // console.log("res::::", res.data);
            setComment("");
            // console.log("postId,,,", postId);
            axios
              .get(
                `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${postId}`
              )
              .then((res) => {
                // console.log("postsComments", res.data.data.comment);
                if(res.data.data.comment.length === 1){
                  console.log(res.data.data.comment)
                setCommentInfo(res.data.data.comment[0].reverse());
                }else{
                setCommentInfo(res.data.data.comment.reverse());
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log("post 요청 댓글 실패 ======", err);
          });
      }
      // 잘 받아오면 userData 에 유저코멘트 정보를 담아주는거임. 이거를 포스트요청 보내.
      // setCommentInfo([…commentInfo, res.data.data]);
    },
    [comment, postId, setComment, setCommentInfo, userId]
  );

  //댓글삭제
  const removeCommentHandler = useCallback((id,comment_id) => {
    // console.log(id,comment_id);
    // console.log('===삭제코멘트',commentId);
    setOpenModal(true);
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
            const filtered = commentInfo.filter(
              (comment) => comment_id !== comment.id
            );
            // console.log('filterd : ', filtered)
            setCommentInfo(filtered);
          })
          .catch((err)=>{
            setModalSuccess(true)
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
          <button onClick = {()=>{setOpenModal(true)}} 
          className="post-comment-text-submit">입력</button>
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
                        src={el.user.image}
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
                      <button onClick={() => {
                          removeCommentHandler(el.user_id, el.id);
                        }}
                        className="remove-button">
                        삭제</button>
                    </div>
                    <div className="post-comment-content">{el.content}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      {!isLogedIn ? 
      <Modal 
      openModal={openModal} 
      closeModal={closeModal}
      modalSuccess = {modalSuccess}
      modalText = '로그인이 필요한 서비스입니다.'
      >
      </Modal>
      :
      null
      }

    </StyledViewPostComment>
  );
}

export default ViewPostComment