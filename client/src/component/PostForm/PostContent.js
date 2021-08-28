import React from 'react'
import { useForm } from "react-hook-form";
import { StyledPostContent, BtnLink, TextArea } from "./StyledPostForm";

import { ErrorMessage } from '../ErrorMessage';

const PostContent = ( props) => {
  console.log(props);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: props.data.title
    },
  });
  const onSubmit = (data) => {
    props.postFormHandler(data);
  };
  console.log(errors);
  return (
    <StyledPostContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">제목</label>
        <input id="title"
          {...register("title", { required: true, minLength: 1 })}
          type="text"
        />
        {errors.title && <ErrorMessage>제목을 입력하세요.</ErrorMessage>}

        <label htmlFor="category">카테고리</label>
        <select {...register("category", { required: true })} id="category">
          <option value="">선택하세요</option>
          <option value="dogs">유기견 소개</option>
          <option value="volunteer">봉사 일정 공유</option>
        </select>
        {errors.category && <ErrorMessage>카테고리를 선택하세요.</ErrorMessage>}

        <label htmlFor="date">날짜</label>
        <input id="date-picker" {...register("date")} type="date" />
        {errors.date && <ErrorMessage>날짜를 선택하세요</ErrorMessage>}

        <label htmlFor="location">보호소 위치</label>
        <input {...register("location")} type="text" />

        <label htmlFor="mobile">연락처</label>
        <input
          {...register("mobile", {
            required: true,
            pattern: /\d{2,3}[- ]\d{3,4}[- ]\d{4}/gi,
          })}
          type="text"
        />
        {errors.mobile && <ErrorMessage>형식에 맞게 입력하세요.</ErrorMessage>}
        <label htmlFor="content">컨텐츠</label>
        <TextArea
          {...register("content", { required: true, maxLength: 500 })}
          placeholder="500자 내로 작성하세요."
        />

        <div className="button-wapper">
          <button type="submit">확인</button>
          <BtnLink to="/">취소</BtnLink>
        </div>
      </form>
    </StyledPostContent>
  );
};

export default PostContent