import React, { useEffect } from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

// import axios from "axios";
//setPostsData : 데이터를 가져왔을 때 응답받았을 떄 데이터. -> 응답받으면 상태변화를 준다.
//setPostsString : 스트링으로 데이터 요청을 보내고

const NavBar = ({
  hasAccessToken,
  setPostsData,
  setNavString,
  handleTop,
  logoutHandler,
  // isLogedIn,
  // setIsLogedIn
}) => {

  let history = useHistory();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const selectNavHandler = (string) => {
    //console.log("네브바 선택::::",string)
    // const postsString = string;
    // setNavString(postsString);
    // history.push("/");
    return axios.get(`https://localhost:4000`, {
      // params: { postsString: postsString },
      withCredentials: true,
    })
    .then((res) => {
      const datas = res.data.data.data;
      //accesstoken 
      //localhost:4000/auth
      //conole.lo(rea.dat) ok 뜨면
      //setislogedin(true) 로바꿔줘
      // if(islogedin === true){
      // return axios.get('')
      // }
      setPostsData(datas);
      history.push("/");
      console.log(document.cookie);
    })
    .catch((err) => alert("정보를 받아오는데 실패하였습니다."));
  };

  const menu = [
    { name: "service" }, 
    { name: "search" }, 
    { name: "volunteer" }
  ];

  useEffect(()=>{
    if(hasAccessToken !== undefined){
      setIsLogedIn(true)
    }else{
      setIsLogedIn(false)
    }
  },[hasAccessToken])


  return (
    <StyledNavBar id="navBar">
      <ul>
        <div className="leftNav">
          {/*로고 */}
          <Link to="/">
            <img onClick={handleTop} src="../images/logo.png" alt="logo img" />
          </Link>
          {}
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
          <Link to="/postform">
            <li className="post">Post</li>
          </Link>
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
