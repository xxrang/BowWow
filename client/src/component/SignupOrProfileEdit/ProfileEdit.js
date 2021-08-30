import React, { useState, useCallback, useEffect } from "react";
import {
  StyledSignUp,
  BtnLink,
  ErrorMessage,
  InputReadOnly,
} from "./StyledSignUp";
// import camera from '../../images/bros_blank.jpeg'
import UserImgUpload from './UserImgUpload';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { dummyUser } from "../dummyData";

const ProfileEdit = ({ hasAccessToken }) => {
  const history = useHistory();

  //이미지 상태관리
  const [userImage, setUserImage] = useState("");
  const [imgCheck, setImgCheck] = useState("true"); // true로 바꿈
  //* image previe
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage(reader.result);
      }
    };
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
    setUserImage(e.target.files[0]);
    setImgCheck("true");
  };

  //*user data state
  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [introduce, onChangeIntroduce, setIntroduce] = useInput("");

  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //* form submit
  const profileEditHandler = useCallback(
    (e) => {
      //accesstoken으로 유저 아이디 만들어서 마지막에 같이 전달
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      const userdate = new FormData();
      userdate.append("email", email);
      userdate.append("nickname", nickname);
      userdate.append("introduce", introduce);
      userdate.append("password", password);
      userdate.append("input-image", e.target[3].files[0]);
      userdate.append("imgCheck", imgCheck);

      // axios.patch(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/profileedit/${user_id}`
      //   ,userdate, {headers: {'Content-Type': 'multipart/form-data',},
      //     withCredentials: true,
      //   })
      //   .then((res)=>{
      //     console.log(res)
      //   })
      //   .catch((err)=>{
      //     console.log(err)
      //   })
      alert("프로필이 수정되었습니다.");
      // history.push("/");
      // console.log(user);
      // console.log("user_id": id
      //   "| email:", email,
      //   "| nickname: ", nickname,
      //   "| introduce :", introduce,
      //   "| password :", password,
      //   "| passwordCheck :", passwordCheck,
      //   "| image", userImage
      // );
    },
    [password, passwordCheck, email, nickname, introduce, userImage, imgCheck]
  );
  
  //data 불러 오기
  //로그인 상태관리
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    if (hasAccessToken !== undefined) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
    // axios.get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/${userid}`, hasAccessToken, {
    //   withCredentials: true
    // }).then((res) => {
    //   console.log(res.data); //데이터 받아옴
    // id, email, nickname image, introduce data 들어옴
    // })
    if (isLogedIn) {
      setEmail(dummyUser.email);
      setIntroduce(dummyUser.introduce);
      setUserImage(dummyUser.image);
      setNickname(dummyUser.nickname);
    }
  }, [
    hasAccessToken,
    isLogedIn,
    setEmail,
    setIntroduce,
    setNickname,
  ]);

  return (
    <StyledSignUp>
      <form
        onSubmit={(e) => {
          profileEditHandler(e);
        }}
      >
        <label htmlFor="email">이메일</label>
        <InputReadOnly
          type="text"
          name="email"
          value={email}
          readOnly
          onChange={onChangeEmail}
        ></InputReadOnly>
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          name="passwordCheck"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordError ? (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        ) : null}
        <UserImgUpload imageHandler={imageHandler} userImage={userImage} />
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          name="nickname"
          value={nickname}
          required
          onChange={onChangeNickname}
        />
        <label htmlFor="introduce">유저 소개</label>
        <input
          name="introduce"
          type="text"
          className="user-info-content"
          placeholder="50자 이내로 입력해주세요."
          value={introduce}
          onChange={onChangeIntroduce}
        />
        <div className="button-wapper">
          <button type="submit">확인</button>
          <BtnLink to="/">취소</BtnLink>
        </div>
      </form>
    </StyledSignUp>
  );
};;;;

export default ProfileEdit;
