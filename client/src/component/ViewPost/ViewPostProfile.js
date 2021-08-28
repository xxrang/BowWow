/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {
  StyledViewPostProfile,
  BtnLink,
  ProfileInfoBtn,
} from "./StyledViewPost";
import userPhotos from "../../images/bros_blank.jpg";

const ViewPostProfile = () => {
  const deletePost = (e) => {
    console.log(e.target.value);
  }
  return (
    <StyledViewPostProfile>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src={userPhotos} alt="user-photo" width="60px" height="60px" />
        </div>
        <div className="profile-info-wrapper">
          <h2>title 들어갑니다 여기에~~~</h2>
          <p>
            haribo <span>2021월 8월 26일</span>
          </p>
        </div>
        <ProfileInfoBtn >
          <BtnLink to="/postedit">수정</BtnLink>
          <button type="button" onClick={deletePost}>삭제</button>
        </ProfileInfoBtn>
      </div>
    </StyledViewPostProfile>
  );
};

export default ViewPostProfile;