import React, { useState, useCallback } from "react";
import { StyledPostForm } from './StyledPostForm';
import UploadImg from './UploadImg';
import PostContent from './PostContent';
// import axios from "axios";

const PostForm = () => {
  //* 이미지 미리보기
  const [userImage, setUserImage] = useState(null);
  const [imgCheck, setImgCheck] = useState("false");
  const imageHandler = (e) => {
  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === 2) {
      setUserImage(reader.result);
    }
  };
  console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
    setImgCheck("true");
};
  
  //*데이터 편집 후 전송
  const [post, setPost] = useState('')
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

      // axios.post("https://localhost:4000/posts", post, {
      //   headers: {"Content-Type": "multipart/form-data",},
      //   withCredentials: true,
      //   }
      // );
    },
    [userImage, imgCheck]
  );
  console.log(post);

  return (
    <StyledPostForm>
      <UploadImg imageHandler={imageHandler} userImage={userImage} />
      <PostContent postFormHandler={postHandler} />
    </StyledPostForm>
  );
}

export default PostForm;
