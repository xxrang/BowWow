/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { StyledProfileInfo, ProfileBtnLink } from "./StyledProfile";
import userPhotos from '../../images/bros_blank.jpg'

const ProfileInfo = () => {
  return (
    <StyledProfileInfo>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src={userPhotos} alt="user-photo" width="100px" height="100px" />
        </div>
        <div className="profile-info-wrapper">
          <div className="profile-info-nickname-btn">
            <h3>haribo</h3>
            <ProfileBtnLink to="/profileedit">프로필 수정</ProfileBtnLink>
          </div>

          <p>dydwns2441@naver.com</p>
        </div>
      </div>
      <div className="profile-info-content">
        만나서 반가워요~~ 나중에 꼭 만나요 🦮
      </div>
    </StyledProfileInfo>
  );
}

export default ProfileInfo
