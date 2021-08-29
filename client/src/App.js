import './App.css';
import React , {useState, useEffect} from 'react'
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import PostFormPage from './pages/PostFormPage'
import ProfilePage from './pages/ProfilePage'
import ProfileEditPage from './pages/ProfileEditPage'
import SearchPage from './pages/SearchPage'
import ViewPostPage from './pages/ViewPostPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage';
import PostEditPage from './pages/PostEditPage';
// import {initialState} from './component/dummyData'
// import axios from 'axios';

//루트만 짜기
function App() {
  const [hasAccessToken, setHasAccessToken] = useState(undefined);
  //let history = useHistory();
  /*로그인 성공했을때 네브바에 프로필 , 로그아웃 버튼 만들어야해 */// undefined
  const [postsData, setPostsData] = useState("");  //홈 네브바에 따른 컨텐츠 보여주시
  const [postsString, setPostsString] = useState("");  //홈 네브바 선택 이름
  
  useEffect(() => {
    // if (postsString !== "") {
    //   const getPostsData = (postsString) => {
    //     return axios
    //       .get(`https://localhost:4000/`, {
    //         params: { posts: postsString },
    //         withCredentials: true,
    //       })
    //       .then((res) => {
    //         const data = res.data.data.data;
    //         setPostsData(data);
    //       });
    //   };
    //   getPostsData(postsString);
    // } else {
    //   const getAllData = () => {
    //     return axios
    //       .get("https://localhost:4000/", { withCredentials: true })
    //       .then((res) => {
    //         const data = res.data.data.data;
    //         setPostsData(data);
    //       });
    //   };
    //   getAllData();
    // }
  }, []);

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
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/postform">
            <PostFormPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/postedit">
            <PostEditPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/profileedit">
            <ProfileEditPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/search">
            <SearchPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/viewpost">
            <ViewPostPage
              hasAccessToken={hasAccessToken}
              logoutHandler={logoutHandler}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/login">
            <LoginPage
              loginHandler={loginHandler}
              setHasAccessToken={setHasAccessToken}
              hasAccessToken={hasAccessToken}
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
          <Route path="/signup">
            <SignUpPage
              setPostsData={setPostsData}
              setPostsString={setPostsString}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;