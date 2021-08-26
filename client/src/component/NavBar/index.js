import React,{useState ,useEffect} from 'react'
import Login from '../Login'
import {StyledNavBar} from './StyledNavBar'
import {Link} from 'react-router-dom'

const NavBar = () => {

  const [modal , setModal] = useState(false);
  const loginModalClick = () => {
    //setModal(modal ? false : true)  
    setModal((prev)=>!prev);
  }

  /*로고 scroll 구현*/
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  useEffect(() => {
    //console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY])

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <StyledNavBar>
      <ul>
        <div className = 'leftNav'>
          <Link to = '/'>
            <img onClick = {handleTop}
            src = '../images/logo.png' alt= 'logo img'/></Link>
          <Link to = '/'><li>Home</li></Link>
          <Link to = '/search'><li>Search</li></Link>
          <Link to = '/volunteer'><li>Volunteer</li></Link>
        </div>
        
        <div className = 'rightNav'>
          <Login loginModalClick = {loginModalClick} modal = {modal}>Login</Login>
          <Link to = '/signup'><button>Signup</button></Link>
        </div>
      </ul>
    </StyledNavBar>
  );
}

export default NavBar
