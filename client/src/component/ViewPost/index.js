import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import { dummyPost } from "../dummyData";
// import axios from "axios";

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
  const [userId, setUserId] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [postInfo, setPostInfo] = useState({});
  const [commentUserInfo,setCommentUserInfo] = useState([]);
  const [isLogedIn , setIsLogedIn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(()=>{
    inputRef.current.focus();

    if(hasAccessToken !== undefined) {
      setIsLogedIn(true);
    }
    console.log(showButton);
    // console.log('userid :', dummyPost.User.id)
    // console.log('hasAccessToken :', hasAccessToken)
    if( Number(hasAccessToken) === dummyPost.User.id ){
      setShowButton(true);
    }else{
      setShowButton(false);
    }
    setUserId({
      id : dummyPost.User.id,
    })
    setUserNickname({
      nickname : dummyPost.User.nickname,
    })
    setUserImage({
      image : dummyPost.User.image,
    })
    //console.log(dummyPost)
    setPostInfo({
      id : dummyPost.id, 
      location : dummyPost.location , 
      mobile : dummyPost.mobile , 
      title : dummyPost.title,
      date : dummyPost.date,
      updateAt : dummyPost.updateAt,
      content : dummyPost.content,
      Image : dummyPost.Image
    })
    setCommentUserInfo(
      dummyPost.Comment
    )
  },[hasAccessToken, setCommentUserInfo, showButton])

  /*useEffect(() => {
    inputRef.current.focus();
    //const getData = axios.get(`localhost:4000/posts/${postId}`
    // , { withCredentials: true })
    //   .then((res) => {
    //    console.log(res.data)
    //   })
    // console.log("hasAccessToken.", hasAccessToken);
    // console.log("postId.", postId);
    //* 유저정보 받아야함, nicname, id, userimage,
    // setUserNickname(res.data.posts.nickname);
    // setUserImage(res.data.posts.image);
    // setUser_id(res.data.posts.userId);
    //* 컨텐츠 정보를 받아야함, id, title, updatedAt, date, contnent, location, category
    // setContentInfo({
    //   post_id: res.data.posts.id,
    //   title: res.data.posts.title,
    //   updateAt: res.data.posts.updateAt,
    //   location: res.data.posts.location,
    //   date: res.data.posts.date,
    //   content: res.data.posts.content,
    //   mobile: res.data.posts.mobile,
    //   Image: res.data.posts.Image,
    //   Comment : [
                    res.data.posts.id,
                    res.data.posts.User.id,
                    res.data.posts.User.nickname,
                    res.data.posts.User.image,
                    res.data.posts.content
                  ]
    // });
    // getData();
  });
  */

  return (
    <StyledViewPost>
      <ViewPostContent
        hasAccessToken={hasAccessToken}
        postId={postId}
        userId={userId}
        userImage={userImage}
        userNickname={userNickname}
        postInfo={postInfo}
        showButton = {showButton}
      />
      <ViewPostComment
        inputRef={inputRef}
        modal={modal}
        showButton = {showButton}
        isLogedIn = {isLogedIn}
        needLoginHandler={needLoginHandler}
        setCommentUserInfo = {setCommentUserInfo}
        loginModalClick={loginModalClick}
        hasAccessToken={hasAccessToken}
        commentUserInfo = {commentUserInfo}
      />
    </StyledViewPost>
  );
}

export default ViewPost