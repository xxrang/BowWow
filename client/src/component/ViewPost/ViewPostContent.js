import React from 'react'
import {StyledViewPostContent} from './StyledViewPost'
import ViewPostProfile from './ViewPostProfile'
import ViewPostContentOne from "./ViewPostContentOne";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ViewPostContent({ hasAccessToken, postId, postInfo, userId, userImage, userNickname }) {
  let history = useHistory();
  const { title, mobile, updateAt, content, date, location, image } = postInfo

  const deletePostHandler = () => {
    axios.delete(`localhost:4000/posts:${postId}`)
      .then((res) => {
        alert('게시글이 삭제되었습니다.')
        history.push('/')
      }).catch(err => {
        console.log(err);
        alert('게시글 삭제에 실패했습니다.')
      })
  };
  
  

  
  return (
    <StyledViewPostContent>
      <ViewPostProfile  />
      <ViewPostContentOne />
    </StyledViewPostContent>
  );
}

export default ViewPostContent
