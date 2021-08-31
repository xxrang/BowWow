import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
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

//루트만 짜기
function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
const [hasAccessToken, setHasAccessToken] = useState(undefined);
  const [postId, setPostId] = useState("");
  const [postsData, setPostsData] = useState(""); //홈 네브바에 따른 컨텐츠 보여주시
  const [navString, setNavString] = useState(""); //홈 네브바 선택 이름
  //let history = useHistory();
  /*로그인 성공했을때 네브바에 프로필 , 로그아웃 버튼 만들어야해 */ // undefined

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
          "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/service",
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          const data = res.data.data.posts;
          setPostsData(data);
        });
    }else if (navString === "volunteer") {
      return axios
        .get(
          "http://ec2-15-165-235-48.ap-northeast-2.compute.amazonaws.com/volunteer",
          { withCredentials: true }
        )
        .then((res) => {
          // console.log(res.data);
          const data = res.data.data.posts;
          setPostsData(data);
        });
    }
  }, [navString]);


  //렌더링이 될때마다 키가 있는지 확인한다.
  useEffect(() => {
    const storageSavedAccessToken =
      window.localStorage.getItem("accessToken") || undefined;
    // console.log(storageSavedAccessToken);
    setHasAccessToken(storageSavedAccessToken);
  }, []);
  //login핸들러
  const loginHandler = (hasAccessToken) => {
    setHasAccessToken(hasAccessToken);
  };
  //logout핸들러
  const logoutHandler = () => {
    setHasAccessToken(undefined);
    window.localStorage.removeItem("accessToken");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage
              isLogedIn={isLogedIn}
              hasAccessToken={hasAccessToken}
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
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
            />
          </Route>
          <Route path="/postedit">
            <PostEditPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              postId={postId}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
            />
          </Route>
          <Route path="/profileedit">
            <ProfileEditPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              setPostId={setPostId}
              postId={postId}
            />
          </Route>
          <Route path="/posts">
            <ViewPostPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setNavString={setNavString}
              postId={postId}
            />
          </Route>
          <Route path="/login">
            <LoginPage
              loginHandler={loginHandler}
              setHasAccessToken={setHasAccessToken}
              hasAccessToken={hasAccessToken}
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