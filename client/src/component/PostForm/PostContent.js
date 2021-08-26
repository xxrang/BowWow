import React from 'react'
import { useForm } from "react-hook-form";
import { StyledPostContent, BtnLink, TextArea } from "./StyledPostForm";

const PostContent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <StyledPostContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          {...register("title", { required: true })}
          type="text"
        />
          <label htmlFor="category">카테고리</label>
          <select {...register("category")} id="category">
            <option value="">선택하세요</option>
            <option value="dogs">유기견 소개</option>
            <option value="volunteer">봉사 일정 공유</option>
          </select>

        <label htmlFor="date">날짜</label>
        <input id="date-picker" {...register("date")} type="date" />

        <label htmlFor="location">보호소 위치</label>
        <input {...register("location")} type="text" />

        <label htmlFor="contact">연락처</label>
        <input {...register("contact")} type="text" />

        <label htmlFor="content">컨텐츠</label>
        <TextArea {...register("content", { required: true })} />

        <div className="button-wapper">
          <button type="submit">확인</button>
          <BtnLink to="/">취소</BtnLink>
        </div>
      </form>
    </StyledPostContent>
  );
}

export default PostContent
