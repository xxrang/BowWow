/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { StyledPostFormUploadImg } from './StyledPostForm';

const UploadImg = ({ image, setImage, setImgCheck }) => {
  // console.log(userImage);
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
    setImgCheck("true");
  };
  return (
    <StyledPostFormUploadImg>
      {image ? (
        <div className="img-container">
          <label htmlFor="input-image">
            <img src={image} alt="user-image" />
          </label>
          <input
            type="file"
            name="img"
            id="input-image"
            accept="image/*"
            onChange={imageHandler}
          />
        </div>
      ) : (
        <div className="img-container">
          <div className="img-wrapper">
            <label htmlFor="input-image">
              클릭하여 이미지를
              <br />
              업로드 하세요
            </label>
            <input
              type="file"
              name="img"
              id="input-image"
              accept="image/jpeg,jpg,svg"
              onChange={imageHandler}
            />
            <p>권장 사항: 20MB 이하 고화질 .jpg 파일</p>
          </div>
        </div>
      )}
    </StyledPostFormUploadImg>
  );
};

export default UploadImg
