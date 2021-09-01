import React, { useState, useEffect } from 'react'
import Main from '../component/Main'
import NavBar from '../component/NavBar'
import Service from '../component/Service'
import Volunteer from '../component/Volunteer'
import Footer from '../component/Footer'
// import Loding from '../component/Loading'
import Search from '../component/Search'

function HomePage({
  hasUserId,
  logoutHandler,
  setPostsData,
  postsData,
  setNavString,
  navString,
  setPostId,
  postId,
  isLogedIn,
  setIsLogedIn,
}) {
  /*스크롤 상태저장*/
  const [ScrollY, setScrollY] = useState(0);
  /*맨 위로 이동*/
  const handleClickForService = () => {
    window.scrollTo({
      top: 940,
      behavior: "smooth",
    });
    // window.scrollTo({
    //   top: service.offsetTop,
    //   behavior: "smooth",
    // });
    setScrollY(940); // ScrollY 의 값을 초기화
  };
  const handleClickSignup = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
  };

  /*로고 scroll 구현*/
  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
  };

  useEffect(() => {
    //console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  const [curNav, setCurNav] = useState(0);
  const selectNavHandler = (idx) => {
    setCurNav(idx);
    //console.log(curNav)
    console.log(idx);
  };
  //
  return (
    <>
      <Main handleClickForService={handleClickForService} />
      <NavBar
        curNav={curNav}
        selectNavHandler={selectNavHandler}
        hasUserId={hasUserId}
        logoutHandler={logoutHandler}
        setPostsData={setPostsData}
        setNavString={setNavString}
        isLogedIn={isLogedIn}
        handleTop={handleTop}
        handleClickSignup={handleClickSignup}
      />
      {navString === "service" || navString === "" ? (
        <Service
          postsData={postsData}
          navString={navString}
          setPostId={setPostId}
          postId={postId}
        />
      ) : navString === "volunteer" ? (
        <Volunteer
          postsData={postsData}
          navString={navString}
          setPostId={setPostId}
          postId={postId}
        />
      ) : (
        <Search />
      )}
      <Footer />
    </>
  );
}

export default HomePage
