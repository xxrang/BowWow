import React, { useState} from 'react';
import {StyledSignUp, BtnLink,ErrorMessage } from './StyledSignUp'
import { useForm } from 'react-hook-form';
import camera from '../../images/bros_blank.jpeg'
import UserImgUpload from './UserImgUpload';

const SignUp = () => {
  const [userImage, setUserImage] = useState(camera);
  
  const imageHandler = (e) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage(reader.result)
      }
    };
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
  };

  const { register, handleSubmit,formState: {errors} } = useForm();
   const onSubmit = (data) => console.log(data);
  // console.log(watch());
  console.log("errors:",errors)
  return (
    <StyledSignUp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-info"></div>
        <label htmlFor="email">이메일</label>
        <input {...register("email", { required: true })} type="email" />
        {errors.email && (
          <ErrorMessage>이메일 형식에 맞게 다시 작성해 주십시오.</ErrorMessage>
        )}
        <label htmlFor="password">비밀번호</label>
        <input
          {...register("password", { required: true, minLength: 8 })}
          type="password"
        />

        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <input
          {...register("passwordCheck", { required: true, minLength: 8 })}
          type="password"
        />

        <UserImgUpload imageHandler={imageHandler} userImage={userImage} />

        {/* <div className="user-info"> */}
        <label htmlFor="nickname">닉네임</label>
        <input
          {...register("nickname", { required: true, minLength: 3 })}
          type="text"
        />
        {errors.nickname && <ErrorMessage>닉네임은 필수입니다.</ErrorMessage>}
        <label htmlFor="content">유저 소개</label>
        <input
          {...register("content")}
          type="text"
          className="user-info-content"
          placeholder="50자 이내로 입력해주세요."
        />
        <div className="button-wapper">
          <button type="submit">확인</button>
          <BtnLink to="/">취소</BtnLink>
        </div>
      </form>
    </StyledSignUp>
  );
}

export default SignUp
