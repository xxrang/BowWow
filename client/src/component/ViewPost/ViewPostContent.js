import React from 'react'
import { 
  StyledViewPostContent,
  StyledViewPostProfile,
  StyledViewPostContentOne,
  ProfileInfoBtn
  } 
  from './StyledViewPost'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
// import { calulateDate } from '../../hooks/calulateDate';

function ViewPostContent({
  postId,
  postInfo,
  userInfo,
  showButton,
  isLogedIn,
}) {
  let history = useHistory();
  if (!postInfo && !userInfo && !postInfo) {
    return null;
  }
  const { nickname, userImage } = userInfo;

  const { title, mobile, content, date, updatedAt, location, image, userId } = postInfo;
  // console.log("포스트컨텐트에:", postInfo);
  // console.log(updatedAt);
  // let newDate = calulateDate(updatedAt).then((res) => res);
  const deletePostHandler = () => {
    axios.get(
      `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
      {
        headers: {
          accesstoken: document.cookie.split(" ")[1].split("=")[1],
          refreshtoken: document.cookie.split(" ")[2].split("=")[1],
        },
      }
    ).then(async (res) => {
      console.log("viewpost-content-auth--", res.data.data);
      if (res.data.data.userinfo === userId) {
        return await axios.delete(
            `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`
        ).then((res) => {
            console.log("삭제", res.data);
            alert("삭제되었습니다.");
            window.location.replace("/");
          })
      } else {
        alert("게시물을 삭제할 수 없습니다.")
      }
    }).catch((err) => {
        console.log(err);
        alert("게시글 삭제에 실패했습니다.");
      });
  };
  // console.log(updatedAt)
  return (
    <StyledViewPostContent>
      <StyledViewPostProfile>
        <div className="profile-container">
          <div className="profile-img-wrapper">
            <img src={userImage} alt="user" width="60px" height="60px" />
          </div>
          <div className="profile-info-wrapper">
            <h2>{title}</h2>
            <p>
              {nickname}
              <span>{updatedAt}</span>
            </p>
          </div>
          {showButton ? (
            <ProfileInfoBtn>
              <button
                onClick={() => {
                  history.push("/postedit");
                }}
              >
                수정
              </button>
              <button type="button" onClick={deletePostHandler}>
                삭제
              </button>
            </ProfileInfoBtn>
          ) : null}
        </div>
      </StyledViewPostProfile>
      <StyledViewPostContentOne>
        <div className="img-wrapper">
          <img src={image} alt="백구" />
        </div>
        <div className="post-info-all">
          <div className="post-info-two">
            {date ? (
              <div className="post-info-date">봉사 날짜: {date}</div>
            ) : (
              <div className="post-info-date"></div>
            )}

            <div className="post-info-location">{location}</div>
          </div>
          <div className="post-info-mobile">{mobile}</div>

          <div className="post-info-content">{content}</div>
        </div>
      </StyledViewPostContentOne>
    </StyledViewPostContent>
  );
}

export default ViewPostContent