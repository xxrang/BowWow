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
import camera1 from '../../images/9.png';

const ProfileEdit = ({ hasAccessToken }) => {
  const [isLogin, setIsLogin] = useState(false);

  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [introduce, onChangeIntroduce, setIntroduce] = useInput("");
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

  //* user data
  //email

  //*user data password
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
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      const user = {email,nickname,introduce,password,userImage,imgCheck };
      axios.post('http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com//users/signup'
        ,user, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
      // console.log(user);
      // console.log("email:", email,
      //   "| nickname: ", nickname,
      //   "| introduce :", introduce,
      //   "| password :", password,
      //   "| passwordCheck :", passwordCheck,
      //   "| image", userImage
      // );
      alert("프로필이 수정되었습니다.");
    },[password, passwordCheck, email, nickname, introduce, userImage, imgCheck]);
  //data 불러 오기
  
  useEffect(() => {
    if (hasAccessToken !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    // axios.get('https://localhost:4000/posts/', hasAccessToken, {
    //   withCredentials: true
    // }).then((res) => {
    //   console.log(res.data); //데이터 받아옴
    //   // email, nickname image, introduce data 들어옴
    // })
    const data = {
      email: "dydwns2441@gmail.com",
      nickname: "준준",
      image: { camera1 },
      introduce: "반갑습니다.",
    };
    if (isLogin) {
      setUserImage(camera1);
      setEmail(data.email);
      setNickname(...data.nickname);
      setIntroduce(data.introduce);
    }
  }, [hasAccessToken, isLogin, setEmail, setIntroduce, setNickname]);

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
          >
        </InputReadOnly>
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
};;

export default ProfileEdit;
