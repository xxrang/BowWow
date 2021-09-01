import React, { useState, useCallback, useEffect } from "react";
import {
  StyledSignUp,
  InputReadOnly,
} from "./StyledSignUp";
import { ErrorMessage } from "../ErrorMessage";
import UserImgUpload from './UserImgUpload';
import useInput from '../../hooks/useInput';
import axios from 'axios';

const ProfileEdit = ({ hasAccessToken, postId }) => {
  //이미지 상태관리
  const [userImage, setUserImage] = useState("");
  const [imgCheck, setImgCheck] = useState("false"); // true로 바꿈
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
  const [passwordError, setPasswordError] = useState(true);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //! form submit
  const profileEditHandler = useCallback(
    (e) => {
      //accesstoken으로 유저 아이디 만들어서 마지막에 같이 전달
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      const userdata = new FormData();
      userdata.append("email", email);
      userdata.append("nickname", nickname);
      userdata.append("introduce", introduce);
      userdata.append("password", password);
      userdata.append("input-image", e.target[3].files[0]);
      userdata.append("imgCheck", imgCheck);

      axios.get(`http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
        {
          headers: {
            accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
            refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
          },
        }
      ).then((res) => {
        console.log("프로필 수정 버튼 클릭시: auth", res.data.data);

        return axios.patch(
          `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/profile?id=${res.data.data.userinfo}`,
          //id에 어세스토큰 해독하고 유저아이들
          userdata,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        ).then((res) => {
          console.log(res.data);
          alert("게시글이 수정되었습니다.");
          window.location.replace("/");
        }).catch((err) => {
          console.log("게시글 수정 patch요청",err);
          alert("게시글 수정에 실패했습니다. 다시 시도해주세요.");
        });
      }).catch((err) => {
        console.log("프로필 수정버튼 클릭 에러::: auth", err)
      })
    },
    [password, passwordCheck, email, nickname, introduce, imgCheck]
  );

  //! data 불러 오기
  //로그인 상태관리
  // console.log(email, nickname, introduce, userImage);
  useEffect(() => {

    axios.get(
      `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
      {
        headers: {
          accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
          refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
        },
      }
    ).then((res) => {
      console.log("프로파일에딧 auth/get :::", res.data.data);

      return axios.get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/profile?id=${res.data.data.userinfo}`,
        {
          withCredentials: true,
        }
      ).then((res) => {
        console.log("프로필수정", res.data); //데이터 받아옴

        setEmail(res.data.data.email);
        setIntroduce(res.data.data.introduce);
        setUserImage(res.data.data.image);
        setNickname(res.data.data.nickname);
      }).catch((err) => {
        console.log("프로파일 에딧,,get:::", err)
      }) 
    }).catch((err) => {
      console.log("프로파일 에딧/get/auth", err)
    })
    
        
        // id, email, nickname image, introduce data 들어옴
        
  }, [hasAccessToken, postId, setEmail, setIntroduce, setNickname]);

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
        <textarea
          name="introduce"
          type="text"
          className="user-info-content"
          placeholder="50자 이내로 입력해주세요."
          value={introduce}
          onChange={onChangeIntroduce}
        />
        <div className="button-wapper">
          <button type="submit">확인</button>
          <button
            onClick={() => {
              window.location.replace('/');
            }}
          >
            취소
          </button>
        </div>
      </form>
    </StyledSignUp>
  );
};;;;

export default ProfileEdit;
