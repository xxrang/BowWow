import React,{useState} from 'react'
import { StyledPostForm } from './StyledPostForm';
import UploadImg from './UploadImg';
import PostContent from './PostContent';
// import camera from '../../images/bros_blank.jpg'

const PostForm = () => {
  const [userImage, setUserImage] = useState(null);
  console.log(userImage);

const imageHandler = (e) => {
  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === 2) {
      setUserImage(reader.result);
    }
  };
  console.log(e.target.files);
  reader.readAsDataURL(e.target.files[0]);
};
  
  
  return (
    <StyledPostForm>
      <UploadImg imageHandler={imageHandler} userImage={userImage} />
      <PostContent />
    </StyledPostForm>
  );
}

export default PostForm
