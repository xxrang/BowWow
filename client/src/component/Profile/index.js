import React from 'react'
import { StyeldProfile } from "./StyledProfile";
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';

const Profile = () => {
  return (
    <StyeldProfile>
      <ProfileInfo />
      <ProfileList />
    </StyeldProfile>
  );
}

export default Profile
