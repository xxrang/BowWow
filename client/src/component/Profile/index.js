import React, { useEffect, useState } from "react";
import { StyeldProfile } from "./StyledProfile";
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';
import { dummyUser } from '../dummyData';
import axios from "axios";

const Profile = ({hasAccessToken}) => {
  // console.log("profile:", hasAccessToken);
  // console.log("dummyuser:", dummyUser)
  const [userInfo, setUserInfo] = useState({})
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    if (hasAccessToken !== undefined) {
      setUserInfo({
        email: dummyUser.email,
        nickname: dummyUser.nickname,
        introduce: dummyUser.introduce,
        image: dummyUser.image,
        id: dummyUser.id 
      })
      setUserPosts(dummyUser.posts);
    }
    //accessToken을 가지고 userId 확인해야함
    // axios.get(
    //   `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/${userId}`
    // ).then((res)=> {
    //console.log(res.data)
    // return res.data
    //}).then((profile)=> {
    // setUserInfo()
    // setUserPosts()
    // })
  }, [hasAccessToken]);

  return (
    <StyeldProfile>
      <ProfileInfo userInfo={userInfo} />
      <ProfileList userPosts={userPosts} />
    </StyeldProfile>
  );
}

export default Profile
