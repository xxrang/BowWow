import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import { initialPosts } from "../dummyData";
import axios from "axios";
//import { initialState } from '../dummyData'

function ViewPost({ hasAccessToken, dataId }) {
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
    axios.post("localhost:4000",{id: "",comment: "",},{
          withCredentials: true,
        })
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
  useEffect(() => {
    inputRef.current.focus();
    // const getData = axios.get(`localhost:4000/posts/${dataId}`, { withCredentials: true })
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    console.log("hasAccessToken.", hasAccessToken)
    console.log("dataId.", dataId);
    //* 유저정보 받아야함, nicname, id, userimage, 
    // setUserNickname(res.data.posts.nickname);
    // setUserImage(res.data.posts.image);
    // setUser_id(res.data.posts.userId);
    //* 컨텐츠 정보를 받아야함, id, title, updatedAt, date, contnent, location, category
    // setContentInfo({
    //   title: res.data.posts.title,
    //   updateAt: res.data.posts.updateAt,
    //   location: res.data.posts.location,
    //   date: res.data.posts.date,
    //   content: res.data.posts.content
    // });
    
    // getData();
  });

  return (
    <StyledViewPost>
      {/* useEffect로 가져온 정보를 여기에다가 뿌려준다. */}
      <ViewPostContent />
      
      <ViewPostComment
        inputRef={inputRef}
        submitCommentHandler={submitCommentHandler}
        modal={modal}
        needLoginHandler={needLoginHandler}
        loginModalClick={loginModalClick}
        commentList={commentList}
      />
    </StyledViewPost>
  );
}

export default ViewPost