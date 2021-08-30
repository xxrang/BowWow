import React, { useState, useCallback, useEffect } from "react";
import { StyledPostForm, TextArea } from "./StyledPostForm";
import UploadImg from "./UploadImg";
import axios from "axios";
import useInput from '../../hooks/useInput';
import { useHistory } from "react-router-dom";

const PostEdit = ({ hasAccessToken, postId, setPostId }) => {
  let history = useHistory();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput("");
  const [date, onChangeDate, setDate] = useInput("");
  const [location, onChangeLocation, setLocation] = useInput("");
  const [mobile, onChangeMobile, setMobile] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  //* 이미지 미리보기
  const [image, setImage] = useState("");
  const [imgCheck, setImgCheck] = useState("true");
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
    setImgCheck("true");
  };

  //*데이터 편집 후 전송

  const patchHandler = useCallback(
    (e) => {
      // console.log(data)
      e.preventDefault();
      const userdata = new FormData();
      userdata.append("title", title);
      userdata.append("category", category);
      userdata.append("date", date);
      userdata.append("location", location);
      userdata.append("input-image", e.target[0].files[0]);
      userdata.append("imgCheck", imgCheck);
      userdata.append("content", content);
      userdata.append("mobile", mobile);
      axios
        .patch(
          `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
          userdata,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          alert("게시글이 수정되었습니다.");
          window.location.replace("/");
        });
    },
    [title, category, date, location, imgCheck, content, mobile, postId]
  );

  const cancelHandler = () => {
    alert("게시글이 수정이 취소되었습니다.");
    history.goBack();
  };

  // console.log("content", content)
  // console.log("postId", postId)
  useEffect(() => {
    axios
      .get(
        `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/posts?id=${postId}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data); //데이터 받아옴
        // title, locaion, mobile, content, image, imgcheck, date, category,
        console.log(res.data.data.posts.category_contents[0].category_id);
        if (res.data.data.posts.category_contents[0].category_id === 1) {
          setCategory("service");
        } else {
          setCategory("volunteer");
        }
        // setCategory(res.data.data.post);
        setContent(res.data.data.posts.content);
        setDate(res.data.data.posts.date);
        setLocation(res.data.data.posts.location);
        setMobile(res.data.data.posts.mobile);
        setTitle(res.data.data.posts.title);
        setImage(res.data.data.posts.image);
        // setPostId(res.data.data.posts.id);
      });
  }, [
    postId,
    setCategory,
    setContent,
    setDate,
    setLocation,
    setMobile,
    setPostId,
    setTitle,
  ]);
  // console.log(data);
  // console.log(userImage);

  // pattern: /\d{2,3}[- ]\d{3,4}[- ]\d{4}/gi;
  return (
    <StyledPostForm>
      <form
        onSubmit={(e) => {
          patchHandler(e);
        }}
      >
        <UploadImg image={image} imageHandler={imageHandler} />
        <div className="form-data">
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
            <option value="service">유기견 소개</option>
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
        </div>
      </form>
    </StyledPostForm>
  );
};

export default PostEdit;
