import React, { useState, useEffect, useCallback } from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
axios.defaults.withCredentials = true;
// import axios from "axios";
//setPostsData : 데이터를 가져왔을 때 응답받았을 떄 데이터. -> 응답받으면 상태변화를 준다.
//setPostsString : 스트링으로 데이터 요청을 보내고

const NavBar = ({
  hasAccessToken,
  setPostsData,
  setNavString,
  handleTop,
  logoutHandler,
  isLogedIn,
}) => {
// console.log("navlogin", isLogedIn)

  let history = useHistory();

  const selectNavHandler = (string) => {
    console.log("네브바 선택::::",string)
    const postsString = string;
    setNavString(postsString);
    history.push("/");
  };

  const menu = [{ name: "service" }, { name: "search" }, { name: "volunteer" }];

  const accessPost = useCallback(() => {
    if (isLogedIn) {
      history.push('/postform')
    } else {
      alert("로그인이 필요한 서비스입니다.");

    }
  },[history, isLogedIn])

  return (
    <StyledNavBar id="navBar">
      <ul>
        <div className="leftNav">
          {/*로고 */}
          <Link to="/">
            <img onClick={handleTop} src="../images/logo.png" alt="logo img" />
          </Link>
          
          {menu.map((menuItem, idx) => {
            return (
              <li
                className="nav"
                key={menuItem.name}
                onClick={() => selectNavHandler(menuItem.name)}
              >
                {menuItem.name}
              </li>
            );
          })}
          <button
            onClick={ accessPost}
          >
            <li className="post">Post</li>
          </button>
        </div>
        {!isLogedIn ? (

          <div className="rightNav">
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
        ) : (
          <div className="rightNav">
            <Link to="/profile">
              <button
                onClick={() => {
                  history.push("/profile");
                }}
              >
                프로필
              </button>
            </Link>

            <Link to="/">
              <button onClick={logoutHandler}>로그아웃</button>
            </Link>
          </div>
        )}
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
