import React from 'react'
<<<<<<< HEAD
import { 
  StyledViewPostContent,
  StyledViewPostProfile,
  StyledViewPostContentOne,
  ProfileInfoBtn
  } 
  from './StyledViewPost'
=======
import {StyledViewPostContent} from './StyledViewPost'
import axios from 'axios';
>>>>>>> 59f9dc6067f31ada4a1ccc05ca8c14949013aa74
import { useHistory } from 'react-router-dom';
//import userPhotos from "../../images/bros_blank.jpg";
import axios from 'axios';

function ViewPostContent({ 
  hasAccessToken, 
  postId, 
  postInfo, 
  userId, 
  userImage, 
  userNickname,
  showButton }) {
  let history = useHistory();

  //const { id } = userId
  const { nickname } = userNickname
  const { image } = userImage
  
  const { title, mobile, updateAt, content, date, location, Image } = postInfo
  //console.log(postInfo);

  //console.log('==='+hasAccessToken)

  const deletePostHandler = () => {
    axios.delete(`localhost:4000/posts:${postId}`)
      .then((res) => {
        alert('게시글이 삭제되었습니다.')
        history.push('/')
      })
      .catch(err => {
        console.log(err);
        alert('게시글 삭제에 실패했습니다.')
      })
  };
  
  return (
    <StyledViewPostContent>
<<<<<<< HEAD
    <StyledViewPostProfile>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src = {image} alt="user-photo" width="60px" height="60px" />
        </div>
        <div className="profile-info-wrapper">
          <h2>{title}</h2>
          <p>{nickname}<span>{date}</span></p>
        </div>
        { showButton ?
        <ProfileInfoBtn >
          <button onClick={() => { history.push('/postedit')}}>수정</button>
          <button type="button" onClick={deletePostHandler}>삭제</button>
        </ProfileInfoBtn>
        : 
        null}
      </div>
    </StyledViewPostProfile>
    <StyledViewPostContentOne>
      <div className="img-wrapper">
        <img src={Image} alt="백구" />
      </div>
      <div className="post-info-all">
        <div className="post-info-two">
          <div>봉사 날짜: </div>
          <div className="post-info-date">{updateAt}</div>
          <div className="post-info-location">{location}</div>
        </div>
        <div className="post-info-mobile">{mobile}</div>

        <div className="post-info-content">
          {content}
        </div>
      </div>
    </StyledViewPostContentOne>
=======
      
>>>>>>> 59f9dc6067f31ada4a1ccc05ca8c14949013aa74
    </StyledViewPostContent>
  );
}

export default ViewPostContent
