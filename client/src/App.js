import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostFormPage from "./pages/PostFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ViewPostPage from "./pages/ViewPostPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostEditPage from "./pages/PostEditPage";
// import { initialPosts } from "./component/dummyData";
import axios from 'axios';
export const END_POINTS = "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com";
//루트만 짜기
function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
const [hasUserId, setHasUserId] = useState(undefined);
  const [postId, setPostId] = useState("");
  const [postsData, setPostsData] = useState(""); //홈 네브바에 따른 컨텐츠 보여주시
  const [navString, setNavString] = useState(""); //홈 네브바 선택 이름
  let history = useHistory();
  /*로그인 성공했을때 네브바에 프로필 , 로그아웃 버튼 만들어야해 */ // undefined
  console.log("islogin", isLogedIn);

  // console.log("data------", postId);
  useEffect(() => {
    // const { service, volunteer } = initialPosts; //데이터를 받아왔다 친다.
    // console.log("app1:", postsData);
    // console.log("app2:", navString);
    // if (navString === "service" || navString === "") {
    //   setPostsData(service);
    // } else if (navString === "volunteer") {
    //   setNavString("volunteer");
    //   setPostsData(volunteer);
    // }
    if (navString === "" || navString === "service") {
      return axios
        .get(
          `${END_POINTS}/service`,
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          const data = res.data.data.posts;
          setPostsData(data);
        });
    }else if (navString === "volunteer") {
      return axios
        .get(`${END_POINTS}/volunteer`, { withCredentials: true })
        .then((res) => {
          // console.log(res.data);
          const data = res.data.data.posts;
          setPostsData(data);
        });
    }
  }, [navString]);


  //렌더링이 될때마다 키가 있는지 확인한다.
  useEffect(() => {
    // console.log("다큐먼트 쿠키", document.cookie);
    // console.log("accesstoken", document.cookie.split(" ")[1].split("=")[1].split(";")[0])
    // console.log("refreshtoken", document.cookie.split(" ")[2].split("=")[1]);

    axios.get(
      `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
      {
        headers: {
          accesstoken: document.cookie.split(" ")[1].split("=")[1],
          refreshtoken: document.cookie.split(" ")[2].split("=")[1],
        },
      }
    ).then((res) => {
      if (hasUserId === res.data.data.userinfo.id) {
        setIsLogedIn(true);
      }
    }).catch((err) => {
      console.log("쿠키오류",err);
    })

    // const storageSavedAccessToken =
    //   window.localStorage.getItem("accessToken") || undefined;
    // // console.log(storageSavedAccessToken);
    // setHasAccessToken(storageSavedAccessToken);
  }, [hasUserId]);
  //login핸들러
  const loginHandler = (hasAccessToken) => {
    setIsLogedIn(true);
    setHasUserId(hasAccessToken);
    console.log("로그인 핸드러", isLogedIn);
  };
  //logout핸들러
  const logoutHandler = () => {
    setHasUserId(undefined);
    setIsLogedIn(false);
    window.localStorage.removeItem("accessToken");
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage
              setIsLogedIn={setIsLogedIn}
              isLogedIn={isLogedIn}
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              navString={navString}
              postsData={postsData}
              postId={postId}
              setPostId={setPostId}
            />
          </Route>
          <Route path="/postform">
            <PostFormPage
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              isLogedIn={isLogedIn}
              setIsLogedIn={setIsLogedIn}
            />
          </Route>
          <Route path="/postedit">
            <PostEditPage
              hasUserId={hasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              postId={postId}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
            />
          </Route>
          <Route path="/profileedit">
            <ProfileEditPage
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              setPostId={setPostId}
              postId={postId}
            />
          </Route>
          <Route path="/posts">
            <ViewPostPage
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              postId={postId}
              isLogedIn={isLogedIn}
            />
          </Route>
          <Route path="/login">
            <LoginPage
              isLogedIn={isLogedIn}
              loginHandler={loginHandler}
              setHasUserId={setHasUserId}
              hasUserId={hasUserId}
              setPostsData={setPostsData}
              setNavString={setNavString}
              setIsLogedIn={setIsLogedIn}
            />
          </Route>
          <Route path="/signup">
            <SignUpPage
              setPostsData={setPostsData}
              setNavString={setNavString}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;