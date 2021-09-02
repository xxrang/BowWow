import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostFormPage from "./pages/PostFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from "./pages/ProfileEditPage";
import ViewPostPage from "./pages/ViewPostPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostEditPage from "./pages/PostEditPage";
import axios from 'axios';

export const END_POINTS = "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com";
//루트만 짜기
function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [hasUserId, setHasUserId] = useState(undefined);
  const [postId, setPostId] = useState("");
  const [postsData, setPostsData] = useState(""); //홈 네브바에 따른 컨텐츠 보여주시
  const [navString, setNavString] = useState(""); //홈 네브바 선택 이름
  // let history = useHistory();
  useEffect(() => {
    if (navString === "" || navString === "service") {
      return axios
        .get(
          `${END_POINTS}/service`,
          { withCredentials: true }
        )
        .then((res) => {
          const data = res.data.data.posts;
          setPostsData(data);
        });
    } else if (navString === "volunteer") {
      return axios
        .get(`${END_POINTS}/volunteer`, { withCredentials: true })
        .then((res) => {
          const data = res.data.data.posts;
          setPostsData(data);
        });
    }
  }, [navString]);

  //렌더링이 될때마다 키가 있는지 확인한다.
  useEffect(() => {

    let accesstoken = document.cookie.includes('accesstoken')
    let refreshtoken = document.cookie.includes('refreshtoken')

    if (!accesstoken || !refreshtoken) {
      return;
    } else {
    axios.get(
      `http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/auth`,
      {
        headers: {
          accesstoken: document.cookie.split("accesstoken=")[1].split(";")[0],
          refreshtoken: document.cookie.split("refreshtoken=")[1].split(";")[0],
        },
      }
    ).then((res) => {
      if (hasUserId === res.data.data.userinfo.id) {
        setIsLogedIn(true);
      }
    }).catch((err) => {
      console.err(err);
    });
  }
  }, [hasUserId]);
  
  //login핸들러
  const loginHandler = (userInfoId) => {
    setIsLogedIn(true);
    setHasUserId(userInfoId);
  };
  //logout핸들러
  const logoutHandler = () => {
    setHasUserId(undefined);
    setIsLogedIn(false);
    alert('로그아웃이 되었습니다.')

    document.cookie = `accesstoken=${null}`;
    document.cookie = `refreshtoken=${null}`;

    window.location.href = "https://eteammerge.ga/";
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
              isLogedIn={isLogedIn}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              isLogedIn={isLogedIn}
              setIsLogedIn={setIsLogedIn}
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
              isLogedIn={isLogedIn}
              setIsLogedIn={setIsLogedIn}
            />
          </Route>
          <Route path="/posts">
            <ViewPostPage
              hasUserId={hasUserId}
              setHasUserId={setHasUserId}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              postId={postId}
              isLogedIn={isLogedIn}
              setIsLogedIn={setIsLogedIn}
            />
          </Route>
          <Route path="/login">
            <LoginPage
              isLogedIn={isLogedIn}
              loginHandler={loginHandler}
              hasUserId={hasUserId}
              setHasUserId={setHasUserId}
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