import React from 'react'
import { StyledProfileList } from "./StyledProfile";
import ProfileListItem from './ProfileListItem';

const ProfileList = () => {
  return (
    <StyledProfileList>
      <h2>내 글 목록</h2>
      <div className="list-item-scroll">
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
      </div>
    </StyledProfileList>
  );
}

export default ProfileList
