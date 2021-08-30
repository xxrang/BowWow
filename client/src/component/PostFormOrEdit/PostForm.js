import React, { useState, useCallback, useEffect } from "react";
import {
  StyledPostForm,
  TextArea,
  StyledPostContent,
} from "./StyledPostForm";
import UploadImg from './UploadImg';
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";
import axios from "axios";

const PostForm = ({ hasAccessToken }) => {
  const history = useHistory();

  const [title, onChangeTitle] = useInput("");
  const [category, onChangeCategory] = useInput("");
  const [date, onChangeDate] = useInput("");
  const [location, onChangeLocation] = useInput("");
  const [mobile, onChangeMobile] = useInput("");
  const [content, onChangeContent] = useInput("");
  //* 이미지 미리보기
  const [image, setImage] = useState("");
  const [imgCheck, setImgCheck] = useState("true");
  
  
  //*데이터 편집 후 전송
  
  const postHandler = useCallback(
    (e) => {
      const userdata = new FormData();
      userdata.append("title", title);
      userdata.append("category", category);
      userdata.append("date", date);
      userdata.append("location", location);
      userdata.append("image", e.target[3].files[0]);
      userdata.append("content", content);
      userdata.append("mobile", mobile);
      userdata.append("imgCheck", imgCheck);
      // console.log(data)
      // 하나로 합쳐줘서 보내준다.
      // axios.post("https://localhost:4000/posts", userdate, {
      //   headers: { "Content-Type": "multipart/form-data" },
      //   withCredentials: true,
      // });

      console.log("userdata", userdata);
    },
    [category, content, date, imgCheck, location, mobile, title]
  );

const cancelHandler = () => {
  alert("게시글 작성이 취소되었습니다.");
  history.goBack();
};
  useEffect(() => {
    if (!hasAccessToken) {
      alert('로그인이 필요한 서비스입니다.')
      history.push('/')
    }
    
    
  },[hasAccessToken, history])
  return (
    <StyledPostForm>
      <UploadImg setImage={setImage} setImgCheck={setImgCheck} image={image} />
      <StyledPostContent>
        <form
          onSubmit={(e) => {
            postHandler(e);
          }}
        >
          <label htmlFor="title">제목</label>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            id="title"
            required
            name="title"
          />

          <label htmlFor="category">카테고리</label>
          <select
            required
            name="categoty"
            id="category"
            value={category}
            onChange={onChangeCategory}
          >
            <option value="">선택하세요</option>
            <option value="dogs">유기견 소개</option>
            <option value="volunteer">봉사 일정 공유</option>
          </select>

          <label htmlFor="date">날짜</label>
          <input
            id="date-picker"
            name="date"
            value={date}
            onChange={onChangeDate}
            type="date"
          />

          <label htmlFor="location">보호소 위치</label>
          <input
            name="location"
            value={location}
            onChange={onChangeLocation}
            type="text"
          />

          <label htmlFor="mobile">연락처</label>
          <input
            name="mobile"
            value={mobile}
            onChange={onChangeMobile}
            type="text"
          />

          <label htmlFor="content">컨텐츠</label>
          <TextArea
            required
            name="content"
            value={content}
            onChange={onChangeContent}
            placeholder="500자 내로 작성하세요."
          />

          <div className="button-wapper">
            <button type="submit">확인</button>
            <button onClick={cancelHandler}>취소</button>
          </div>
        </form>
      </StyledPostContent>
    </StyledPostForm>
  );
}

export default PostForm;
