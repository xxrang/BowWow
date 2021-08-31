import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import { dummyPost } from "../dummyData";
import axios from "axios";

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

  // console.log("커멘트인포!!!!!!", commentInfo);
  // console.log("포스트 인포:::-----", postInfo);
  

  useEffect(() => {
    inputRef.current.focus();

    if (hasAccessToken !== undefined) {
      setIsLogedIn(true);
    }
    // console.log(showButton);
    // console.log('userid :', dummyPost.User.id)
    // console.log('hasAccessToken :', hasAccessToken)

    
    console.log(postId);
    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log("--------res.data-------", res.data);
        //! hasAccessToken에서 유저아이디를 뽑아내고, 포스트의 유저아이디가 같을 경우에 버튼을 보여준다.
        //! 이걸 확인하면 버튼이 보여지면 포스트에딧이나 삭제에도 문제가 없다.
        //! 다른 사람은 버튼을 보지못하니까
        //! 이건 언제 하느냐....? get요청하고, 거기서 유저정보 받아오면
        if (Number(hasAccessToken) === res.data.data.posts.user.id) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
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
        setCommentInfo(res.data.data.comment.reverse());
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