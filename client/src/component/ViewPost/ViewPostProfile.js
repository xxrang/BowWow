import React from 'react';
import { StyledViewPostProfile } from './StyledViewPost';
import userPhotos from "../../images/bros_blank.jpg";

const ViewPostProfile = () => {
  return (
    <StyledViewPostProfile>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src={userPhotos} alt="user-photo" width="60px" height="60px" />
        </div>
        <div className="profile-info-wrapper">
          <h2>title 들어갑니다 여기에~~~</h2>
          <p>haribo</p>
        </div>
        <p>2021월 8월 26일</p>
      </div>
    </StyledViewPostProfile>
  );
}

export default ViewPostProfile
