import React, { useCallback, useState } from "react";
import NeedLogin from '../NeedLogin'
import useInput from '../../hooks/useInput'
import { StyledViewPostComment } from './StyledViewPost';
import axios from 'axios';

function ViewPostComment({
  inputRef,
  isLogedIn,
  commentInfo,
  setCommentInfo,
  showButton,
  postId,
  userInfo,
}) {
  // const comments = commentInfo.pop();
  console.log("1번코멘트:", commentInfo);
  // console.log("user--------", commentInfo.user.image);
  //초기 코멘트
  const [comment, onChangeComment, setComment] = useInput("");
  // 모달
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal((prev) => !prev);
  };
  
  const addCommentHandler = useCallback((e) => {
    e.preventDefault();
    if (isLogedIn) {
      if (comment !== "") {
        const data = {
          userId: userInfo.userId,
          content: comment,
          postId: postId
        };
        console.log(data);
        axios.post(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments`,
            data,
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("댓글추가:", res.data);
            setComment("");
            return axios.get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${postId}`, { withCredentials: true }
            ).then((res) => {
              console.log("댓글 불러오기:", res.data);
              setCommentInfo(res.data.data.comment.reverse());
            })
          });
      } else if (comment.length === 0) {
        //모달로 해야할..꽈 ?
        alert("댓글을 입력하세요.");
      }
    } else {
      setOpenModal(true);
    }
  },[comment, isLogedIn, postId, setComment, setCommentInfo, userInfo.userId]);

  const removeCommentHandler = useCallback(
    (id) => {
      const commentId = id;
      axios
        .delete(
          `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/comments?id=${commentId}`,
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          console.log("삭제되었습니다.");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("2번째코멘트인포:", commentInfo);
      const filtered = commentInfo.filter(
        (comment) => commentId !== comment.id
      );
      console.log("filtered:", filtered);
      setCommentInfo(filtered);
    },
    [commentInfo, setCommentInfo]
  );

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
                          {/* {el.user.nickname} */}
                        </p>
                        <p className="post-comment-date">{el.updatedAt}</p>
                      </div>
                      <button
                        onClick={() => {
                          removeCommentHandler(el.id);
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
      <NeedLogin openModal={openModal} closeModal={closeModal}></NeedLogin>
    </StyledViewPostComment>
  );
}

export default ViewPostComment

