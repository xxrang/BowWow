import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import { dummyPost } from "../dummyData";
import axios from "axios";
axios.defaults.withCredentials=true;

function ViewPost({
  hasAccessToken,
  logoutHandler,
  setPostsData, //네브바에 따른 데이터
  setNavString, //네브바에 따른 스트링. 
  postId,
}) {
  const needLoginHandler = () => {
    console.log("no");
  };
  //모달
  const [modal, setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)
    setModal((prev) => !prev);
  };

  //useRef 등록
  const inputRef = useRef();
  //useEffect
  const [userInfo, setUserInfo] = useState({})
  const [postInfo, setPostInfo] = useState({});
  const [commentInfo, setCommentInfo] = useState([]);
  
  const [isLogedIn , setIsLogedIn] = useState(false);
  const [showButton, setShowButton] = useState(false);

  console.log("커멘트인포!!!!!!", commentInfo);
  console.log("포스트 인포:::-----", postInfo);
  
  useEffect(() => {
    inputRef.current.focus();

    if (hasAccessToken !== undefined) {
      setIsLogedIn(true);
    }
    // console.log(showButton);
    // console.log('userid :', dummyPost.User.id)
    // console.log('hasAccessToken :', hasAccessToken)
    if (Number(hasAccessToken) === dummyPost.User.id) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    console.log(postId);
    axios.get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
        { withCredentials: true }
      )
      .then((res) => {
        // console.log("--------res.data-------", res.data);
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
        });
        // console.log(res.data.data.comment.reverse())
        setCommentInfo(res.data.data.comment.reverse());
        //return;
      })
      .then(()=>{
        axios
        .get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hasAccessToken, postId]);

  return (
    <StyledViewPost>
      <ViewPostContent
        hasAccessToken={hasAccessToken}
        postId={postId}
        userInfo={userInfo}
        postInfo={postInfo}
        showButton={showButton}
      />
      <ViewPostComment
        inputRef={inputRef}
        modal={modal}
        showButton={showButton}
        isLogedIn={isLogedIn}
        needLoginHandler={needLoginHandler}
        setCommentInfo={setCommentInfo}
        loginModalClick={loginModalClick}
        hasAccessToken={hasAccessToken}
        commentInfo={commentInfo}
        postId={postId}
        userInfo={userInfo}
      />
    </StyledViewPost>
  );
}

export default ViewPost