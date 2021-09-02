import React, { useState, useRef, useEffect } from "react";
import { StyledViewPost } from "./StyledViewPost";
import ViewPostContent from "./ViewPostContent";
import ViewPostComment from "./ViewPostComment";
import axios from "axios";
axios.defaults.withCredentials=true;

function ViewPost({ postId, isLogedIn}) {
  //useRef 등록
  const inputRef = useRef();
  //useEffect
  const [userInfo, setUserInfo] = useState({});
  const [postInfo, setPostInfo] = useState({});
  const [commentInfo, setCommentInfo] = useState([]);
  const [userId, setUserId] = useState("");
  const [showButton, setShowButton] = useState(false);

const getAuth = async () => {
  return await axios
    .get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`, {
      headers: {
        accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
        refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
      },
    })
    .then((res) => {
      // console.log("auth", res.data.data);
      setUserId(res.data.data.userinfo);
    })
    .catch((err) => {
      console.log("auth에러", err);
    });
};

  useEffect(() => {
    inputRef.current.focus();
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
          post_id: res.data.data.posts.id,
          title: res.data.data.posts.title,
          content: res.data.data.posts.content,
          location: res.data.data.posts.location,
          mobile: res.data.data.posts.mobile,
          date: res.data.data.posts.date,
          image: res.data.data.posts.image,
          updatedAt: res.data.data.posts.updatedAt,
          userId: res.data.data.posts.user.id,
        });
        // console.log('======왜안됨?===', res.data.data.comment)
        if(res.data.data.comment.length === 1){
          console.log(res.data.data.comment)
        setCommentInfo(res.data.data.comment[0].reverse());
        }else{
        setCommentInfo(res.data.data.comment.reverse());
        }

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
        postInfo={postInfo}
        userInfo={userInfo}
        showButton={showButton}
        isLogedIn={isLogedIn}
      />
      <ViewPostComment
        inputRef={inputRef}
        commentInfo={commentInfo}
        setCommentInfo={setCommentInfo}
        postId={postInfo.post_id}
        userId={userId}
        isLogedIn={isLogedIn}
      />
    </StyledViewPost>
  );
}

export default ViewPost