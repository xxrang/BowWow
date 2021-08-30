import React from 'react'
import { 
  StyledViewPostContent,
  StyledViewPostProfile,
  StyledViewPostContentOne,
  ProfileInfoBtn
  } 
  from './StyledViewPost'
import { useHistory } from 'react-router-dom';
//import userPhotos from "../../images/bros_blank.jpg";
//import axios from 'axios';

function ViewPostContent({ 
  hasAccessToken, 
  postId, 
  postInfo, 
  userInfo,
  showButton }) {
  let history = useHistory();
  //console.log("2:::",showButton);
  //const { id } = userId
  const { userId, nickname, userImage } = userInfo;
  
  const { title, mobile, content, date,updatedAt, location, Image } = postInfo
  //console.log(postInfo);

    const deletePostHandler = () => {
      /* 
      axios.delete("http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts")
      ,doby 부분 : {
        postId : 
      }
      ,{
        withCredentials: true
      }
      .then((res) => {
        alert('삭제되었습니다.')
        console.log(삭제되었습니다.)
        history.push('/')
      })
      .catch(err => {
        console.log(err);
        alert('게시글 삭제에 실패했습니다.')
      })
    */
    };
    
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
            <img src={Image} alt="백구" />
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
