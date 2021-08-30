import React, { useState, useCallback } from "react";
import {StyledSignUp, BtnLink,ErrorMessage } from './StyledSignUp'
import camera from '../../images/bros_blank.jpeg'
import UserImgUpload from './UserImgUpload';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  //* image preview
  const [userImage, setUserImage] = useState(camera);
  const [imgCheck, setImgCheck] = useState("false");
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

  //* user data
  //email
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [introduce, onChangeIntroduce] = useInput("");

  //*user data password
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },[password]);

  //* form submit
  const signupHandler = useCallback(
    (e) => {
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
      axios
        .post(
          "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/users/signup",
          userdate,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          history.push('/')
        })
        .catch((err) => {
          console.log(err);
        });
      
      // console.log("email:", email,
      //   "| nickname: ", nickname,
      //   "| introduce :", introduce,
      //   "| password :", password,
      //   "| passwordCheck :", passwordCheck,
      //   "| image", userImage
      // );

      alert("회원가입이 완료되었습니다.");
    },
    [password, passwordCheck, email, nickname, introduce, userImage, imgCheck]
  );

  return (
    <StyledSignUp>
      <form onSubmit={(e) => { signupHandler(e) }}>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={onChangeEmail}
        />
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
        <textarea
          name="introduce"
          type="text"
          className="user-info-content"
          placeholder="50자 이내로 입력해주세요."
          value={introduce}
          onChange={onChangeIntroduce}
        />
        <div className="button-wapper">
          <button type="submit">
            확인
          </button>
          <BtnLink to="/">취소</BtnLink>
        </div>
      </form>
    </StyledSignUp>
  );
}

export default SignUp;
