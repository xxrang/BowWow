import React, { useEffect, useState } from "react";
import { StyeldProfile } from "./StyledProfile";
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';
import axios from "axios";

const Profile = ({hasAccessToken }) => {
  // console.log("profile:", hasAccessToken);
  // console.log("dummyuser:", dummyUser)
  const [userInfo, setUserInfo] = useState({})
  const [userPosts, setUserPosts] = useState([]);
  console.log("userInfo-------", userInfo);
  console.log("userPosts------", userPosts);
  useEffect(() => {
    // if (hasAccessToken !== undefined) {
    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/profile?id=1`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log("프로파일", res.data);
        return res.data;
      })
      .then((profile) => {
        console.log("프로파일.데이터", profile.data);
      setUserInfo({
        id: profile.data[0].id,
        image: profile.data[0].image,
        introduce: profile.data[0].introduce,
        email: profile.data[0].email,
        nickname: profile.data[0].nickname,
      });
      setUserPosts(profile.data[0].posts);
    }).catch((err) => {
      console.log(err);
      // alert("데이터 불러오기를 실패했습ㄴ디ㅏ.")
    })
  }, [hasAccessToken]);
    //accessToken을 가지고 userId 확인해야함
    

  return (
    <StyeldProfile>
      <ProfileInfo userInfo={userInfo} />
      <ProfileList userPosts={userPosts} />
    </StyeldProfile>
  );
}

export default Profile
