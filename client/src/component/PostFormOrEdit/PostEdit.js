import React, { useState, useCallback, useEffect } from "react";
import { StyledPostForm } from "./StyledPostForm";
import UploadImg from "./UploadImg";
import PostContent from "./PostContent";
// import axios from "axios";
import camera1 from '../../images/bros_blank.jpg';

const PostEdit = ({ hasAccessToken }) => {
  const [isLogin, setIsLogin] = useState(false);
  //* 이미지 미리보기
  const [userImage, setUserImage] = useState({ camera1 });
  const [imgCheck, setImgCheck] = useState("false");
  const [data, setData] = useState("");

  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage(reader.result);
      }
    };
    console.log(e.target.files);
    reader.readAsDataURL(e.target.files[0]);
    setImgCheck("true");
  };

  //*데이터 편집 후 전송
  const [post, setPost] = useState("");
  const patchHandler = useCallback(
    (data) => {
      const { title, category, date, location, mobile, content } = data;
      setPost({
        title,
        category,
        date,
        location,
        mobile,
        content,
        image: userImage,
        imgCheck,
      });
      // console.log(data)

      // axios.patch("https://localhost:4000/posts", post, {
      //   headers: {"Content-Type": "multipart/form-data",},
      //   withCredentials: true,
      //   }
      // );
    },
    [userImage, imgCheck]
  );
  console.log(post);

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
    //   // title, locaion, mobile, content, image, imgcheck, date, category
    // })

    if (isLogin) {
      setUserImage({ camera1 });
      setData({
        title: "뚱이입니다",
        location: "서울시 용산구 후암동 345-12",
        mobile: "010-7185-2791",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aliquam maiores deserunt ipsam. Qui laborum exercitationem commodi ab consectetur voluptatum obcaecati iure facere ipsum. Autem, impedit quaerat! Similique cumque dicta ipsam debitis quam, aut mollitia, natus laudantium repellendus minima eos! Quas amet natus molestias, exercitationem voluptates quidem molestiae ea blanditiis, sit delectus adipisci, accusamus doloremque mollitia cum architecto quae! Dolores cupiditate repudiandae praesentium odio, corporis suscipit quia doloribus. Nisi quae voluptas sequi a magnam. Eum animi eos, molestiae quisquam quos recusandae consequuntur! Similique velit molestiae asperiores earum? Reiciendis quidem earum saepe ab sapiente dolorum quam consectetur alias id, exercitationem facilis facere vel praesentium ratione ut tempore. Exercitationem, natus ipsam. Doloremque sapiente, odio ut tenetur quis optio iusto vel fuga accusantium, deleniti distinctio odit. Quisquam aspernatur minus aperiam est provident ullam soluta maiores eligendi, reiciendis dolore natus commodi pariatur quidem et libero deserunt, nesciunt, dolores illo. Quos nulla perspiciatis est commodi sint repellat reiciendis corporis harum! Possimus odio nemo, labore veniam eos amet, ipsam necessitatibus officiis cumque ratione quo sunt molestias aliquam vero ut rem? Ipsum sapiente minus doloribus modi expedita qui numquam impedit corporis dicta pariatur hic esse vero blanditiis quae molestias, corrupti vel sed aperiam cum itaque ipsam repellat sequi. Quae ipsa maiores veniam dolorem similique deserunt minima est commodi quia. Dolore molestias perferendis facilis architecto eaque animi omnis ut explicabo cumque voluptatibus minus amet delectus cum neque esse enim dicta minima itaque recusandae porro, blanditiis nostrum? Iure iusto dolor accusantium voluptas velit molestiae ex ducimus assumenda omnis rerum.",
        
      });
    }
  }, [hasAccessToken, isLogin]);
  console.log("isLogin", isLogin);
  // console.log(data);
  // console.log(userImage);
  return (
    <StyledPostForm>
      <UploadImg imageHandler={imageHandler} userImage={userImage} />
      <PostContent postFormHandler={patchHandler} data={data} />
    </StyledPostForm>
  );
};

export default PostEdit;
