import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import axios from "axios";
axios.defaults.withCredentials=true;

function ViewPost({ 
<<<<<<< HEAD
  postId, isLogedIn ,
  setHasUserId }) {
  const needLoginHandler = () => {
    console.log("no");
  };
=======
  hasAccessToken, 
  logoutHandler, postId, isLogedIn ,
  hasUserId,setHasUserId }) {
  
>>>>>>> 25b04bcc38c0466cf7967b86e9d717c98bb95c9f
  //모달
  const [modal, setModal] = useState(false);
  const loginModalClick = () => {
    setModal((prev) => !prev);
  };

  //useRef 등록
  const inputRef = useRef();
  //useEffect
  const [userInfo, setUserInfo] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [commentInfo, setCommentInfo] = useState([]);
  const [userId, setUserId] = useState("");
  const [showButton, setShowButton] = useState(false);

  // console.log("커멘트인포!!!!!!", commentInfo);
  // console.log("포스트 인포:::-----", postInfo);
const getAuth = async () => {
  return await axios
    .get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`, {
      headers: {
        accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
        refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
      },
    })
    .then((res) => {
      console.log("auth", res.data.data);
      setUserId(res.data.data.userinfo);
    })
    .catch((err) => {
      console.log("auth에러", err);
    });
};

  useEffect(() => {
    inputRef.current.focus();
    console.log("선택한 포스트 아이디", postId);
    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
        { withCredentials: true }
      )
      .then((res) => {
        setUserInfo({
          userId: res.data.data.posts.user.id,
          nickname: res.data.data.posts.user.nickname,
          userImage: res.data.data.posts.user.image,
        });
        setPostInfo({
          id: res.data.data.posts.id,
          title: res.data.data.posts.title,
          content: res.data.data.posts.content,
          location: res.data.data.posts.location,
          mobile: res.data.data.posts.mobile,
          date: res.data.data.posts.date,
          image: res.data.data.posts.image,
          updatedAt: res.data.data.posts.updatedAt,
          userId: res.data.data.posts.user.id,
        });
        console.log('======왜안됨?===', res.data.data.comment)
        setCommentInfo(res.data.data.comment.reverse());

        return axios
          .get(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
            {
              headers: {
                accesstoken: document.cookie
                  .split("accesstoken=")[1]
                  .split(";")[0],
                refreshtoken: document.cookie
                  .split("refreshtoken=")[1]
                  .split(";")[0],
              },
            }
          )
          .then((res) => {
            if (res.data.data.userinfo === userInfo.userId) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          })
          .catch((err) => {
            console.log("auth에러", err);
          });
      })
      .catch((err) => {
        console.log("포스트보기요청 에러", err);
      });
    
    getAuth()
  }, [postId, setCommentInfo, userInfo.userId]);

  return (
    <StyledViewPost>
      <ViewPostContent
        postId={postId}
        userInfo={userInfo}
        postInfo={postInfo}
        showButton={showButton}
        isLogedIn={isLogedIn}
      />
      <ViewPostComment
        inputRef={inputRef}
        modal={modal}
        isLogedIn = {isLogedIn}
        showButton={showButton}
        setCommentInfo={setCommentInfo}
        loginModalClick={loginModalClick}
        commentInfo={commentInfo}
        postId={postId}
        userInfo={userInfo}
        userId={userId}
        setHasUserId={setHasUserId}
      />
    </StyledViewPost>
  );
}

export default ViewPost