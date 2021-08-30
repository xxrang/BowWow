import React, { useState, useCallback, useEffect } from "react";
import { StyledPostForm } from './StyledPostForm';
import UploadImg from './UploadImg';
import PostContent from './PostContent';
import { useHistory } from "react-router-dom";
// import axios from "axios";

const PostForm = ({ hasAccessToken }) => {
  let history = useHistory();
  //* 이미지 미리보기
  const [userImage, setUserImage] = useState(null);
  const [imgCheck, setImgCheck] = useState("false");
  
  
  //*데이터 편집 후 전송
  const [post, setPost] = useState({})
  const postHandler = useCallback(
    (data) => {
      const { title, category, date, location, mobile, content } = data;
      setPost({
        title,
        category,
        date,
        location,
        mobile,
        content,
        image: userImage,
        imgCheck,
      });
      // console.log(data)
      // 하나로 합쳐줘서 보내준다. 
      // axios.post("https://localhost:4000/posts", post, {
      //   headers: {"Content-Type": "multipart/form-data",},
      //   withCredentials: true,
      //   }
      // );
    },
    [userImage, imgCheck]
  );
  console.log(post);


  useEffect(() => {
    if (!hasAccessToken) {
      alert('로그인이 필요한 서비스입니다.')
      history.push('/')
    }
    
    
  },[hasAccessToken, history])
  return (
    <StyledPostForm>
      <UploadImg
        setUserImage={setUserImage}
        setImgCheck={setImgCheck}
        userImage={userImage}
      />
      <PostContent postHandler={postHandler} />
    </StyledPostForm>
  );
}

export default PostForm;
