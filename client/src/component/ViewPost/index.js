import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import { initialPosts, dummyPost } from "../dummyData";
import axios from "axios";

function ViewPost({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setNavString,
  postId,
}) {
  console.log(dummyPost);
  const needLoginHandler = () => {
    console.log("no");
  };
  //모달
  const [modal, setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)
    setModal((prev) => !prev);
  };

  //코멘트 추가
  const [commentList, setCommentList] = useState(
    initialPosts.service[0].Comment
  );
  //console.log(commentList)

  const submitCommentHandler = (e, comment) => {
    console.log("index" + comment);
    inputRef.current.focus();
    e.preventDefault();
    //const commentDummy = (initialPosts.MainPosts[0].Comment[0])
    //console.log(commentDummy)

    //axios.post('localhost4000',data) //코멘트데이터
    //axios.get('localhost4000',data) //코멘트데이터
    axios
      .post(
        "localhost:4000",
        { id: "", comment: "" },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    setCommentList([
      { id: 1, nickname: "숙영", image: "", content: comment },
      ...commentList,
    ]);
  };
  //useRef 등록
  const inputRef = useRef();
  //useEffect

  const [userId, setUserId] = useState('');
  const [userImage, setUserImage] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [postInfo, setPostInfo] = useState({});
  

  useEffect(() => {
    inputRef.current.focus();

    // const getData = axios.get(`localhost:4000/posts/${postId}`, { withCredentials: true })
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    console.log("hasAccessToken.", hasAccessToken);
    console.log("postId.", postId);
    //* 유저정보 받아야함, nicname, id, userimage,
    // setUserNickname(res.data.posts.nickname);
    // setUserImage(res.data.posts.image);
    // setUser_id(res.data.posts.userId);
    //* 컨텐츠 정보를 받아야함, id, title, updatedAt, date, contnent, location, category
    // setContentInfo({
    //   post_id: res.data.posts.id
    //   title: res.data.posts.title,
    //   updateAt: res.data.posts.updateAt,
    //   location: res.data.posts.location,
    //   date: res.data.posts.date,
    //   content: res.data.posts.content,
    //   mobile: res.data.posts.content,
    //   image: res.data.posts.image,
    // });

    // getData();
  });

  return (
    <StyledViewPost>
      <ViewPostContent
        hasAccessToken={hasAccessToken}
        postId={postId}
        userId={userId}
        userImage={userImage}
        userNickname={userNickname}
        postInfo={postInfo}
      />
      <ViewPostComment
        inputRef={inputRef}
        modal={modal}
        needLoginHandler={needLoginHandler}
        submitCommentHandler={submitCommentHandler}
        loginModalClick={loginModalClick}
        hasAccessToken={hasAccessToken}
      />
    </StyledViewPost>
  );
}

export default ViewPost