import React, { useState, useCallback, useEffect } from "react";
import { StyledPostForm, TextArea, BtnLink, StyledPostContent } from "./StyledPostForm";
import UploadImg from "./UploadImg";
// import axios from "axios";
import camera1 from '../../images/bros_blank.jpeg';
import useInput from '../../hooks/useInput';
import { useHistory } from "react-router-dom";

const PostEdit = ({ hasAccessToken, postId }) => {
  const history = useHistory();
  
  const [title, onChangeTitle, setTitle] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput("");
  const [date, onChangeDate, setDate] = useInput("");
  const [location, onChangeLocation, setLocation] = useInput("");
  const [mobile, onChangeMobile, setMobile] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  //* 이미지 미리보기
  const [userImage, setUserImage] = useState("");
  const [imgCheck, setImgCheck] = useState("true");
  

  //*데이터 편집 후 전송
  const [post, setPost] = useState("");
  const patchHandler = useCallback(() => {
      setPost({
        title,
        category,
        date,
        location,
        mobile,
        content,
        image: userImage,
        imgCheck
      });
      // console.log(data)

      // axios.patch(`https://localhost:4000/posts/{postId}`, post, {
      //   headers: {"Content-Type": "multipart/form-data",},
      //   withCredentials: true,
      //   }
      // );
    alert("게시글이 수정되었습니다.")
    history.push('/');

    },
    [title, category, date, location, mobile, content, userImage, imgCheck, history]
  );
  console.log(post);

  const cancelHandler = () => {
    alert("게시글이 수정이 취소되었습니다.");
    history.goBack();
  }

  useEffect(() => {
    // axios.get(`https://localhost:4000/posts/{postId}`, hasAccessToken, {
    //   withCredentials: true
    // }).then((res) => {
    //   console.log(res.data); //데이터 받아옴
    //   // title, locaion, mobile, content, image, imgcheck, date, category
    // })
    setUserImage({ camera1 });
    setTitle("뚱이입니다");
    setCategory("dogs");
    setDate("2021-09-21");
    setLocation("서울시 용산구 후암동 345-12");
    setMobile("010-7185-2791")
    setContent("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aliquam maiores deserunt ipsam. Qui laborum exercitationem commodi ab consectetur voluptatum obcaecati iure facere ipsum. Autem, impedit quaerat! Similique cumque dicta ipsam debitis quam, aut mollitia, natus laudantium repellendus minima eos! Quas amet natus molestias, exercitationem voluptates quidem molestiae ea blanditiis, sit delectus adipisci, accusamus doloremque mollitia cum architecto quae! Dolores cupiditate repudiandae praesentium odio, corporis suscipit quia doloribus. Nisi quae voluptas sequi a magnam. Eum animi eos, molestiae quisquam quos recusandae consequuntur! Similique velit molestiae asperiores earum? Reiciendis quidem earum saepe ab sapiente dolorum quam consectetur alias id, exercitationem facilis facere vel praesentium ratione ut tempore. Exercitationem, natus ipsam. Doloremque sapiente, odio ut tenetur quis optio iusto vel fuga accusantium, deleniti distinctio odit. Quisquam aspernatur minus aperiam est provident ullam soluta maiores eligendi, reiciendis dolore natus commodi pariatur quidem et libero deserunt, nesciunt, dolores illo. Quos nulla perspiciatis est commodi sint repellat reiciendis corporis harum! Possimus odio nemo, labore veniam eos amet, ipsam necessitatibus officiis cumque ratione quo sunt molestias aliquam vero ut rem? Ipsum sapiente minus doloribus modi expedita qui numquam impedit corporis dicta pariatur hic esse vero blanditiis quae molestias, corrupti vel sed aperiam cum itaque ipsam repellat sequi. Quae ipsa maiores veniam dolorem similique deserunt minima est commodi quia. Dolore molestias perferendis facilis architecto eaque animi omnis ut explicabo cumque voluptatibus minus amet delectus cum neque esse enim dicta minima itaque recusandae porro, blanditiis nostrum? Iure iusto dolor accusantium voluptas velit molestiae ex ducimus assumenda omnis rerum.")
    setUserImage(camera1)
  }, [setCategory, setContent, setDate, setLocation, setMobile, setTitle]);
  // console.log(data);
  // console.log(userImage);

  // pattern: /\d{2,3}[- ]\d{3,4}[- ]\d{4}/gi;
  return (
    <StyledPostForm>
      <UploadImg
        setUserImage={setUserImage}
        setImgCheck={setImgCheck}
        userImage={userImage}
      />
      <StyledPostContent>
        <form>
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
            <button
                onClick={patchHandler}
              type="submit"
            >
              확인
            </button>
            <button onClick={cancelHandler}>취소</button>
          </div>
        </form>
      </StyledPostContent>
    </StyledPostForm>
  );
};

export default PostEdit;
