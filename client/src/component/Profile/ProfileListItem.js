import React from 'react'
import { StyledProfileListItem } from "./StyledProfile";

const ProfileListItem = () => {
  return (
    <StyledProfileListItem>
      <div className="list-item-wrapper">
        <h3>골든리트리버 디에프에스</h3>
        <div>2021년 8월 27일</div>
      </div>
      <p>여기 이 귀여운 강아지좀 보세요~~너무귀엽지 않나요</p>
    </StyledProfileListItem>
  );
}

export default ProfileListItem
