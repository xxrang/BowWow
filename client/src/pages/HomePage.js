import React,{useState,useEffect} from 'react'
import Main from '../component/Main'
import NavBar from '../component/NavBar'
import Service from '../component/Service'
import Search from '../component/Search'
import Volunteer from '../component/Volunteer'
import Footer from '../component/Footer'

function HomePage({
  hasAccessToken,
  logoutHandler,
  setPostsData,
  setPostsString,
}) {
  
  /*스크롤 상태저장*/
  const [ScrollY, setScrollY] = useState(0);  
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }
  /*맨 위로 이동*/ 
  const handleClickForService = () => {  
    window.scrollTo({
      top: 810,
      behavior: "smooth"
    });
    setScrollY(810);  // ScrollY 의 값을 초기화
  }
  /*로고 scroll 구현*/
  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
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

  const [curNav, setCurNav] = useState(0);
  const selectNavHandler = (idx) => {
    setCurNav(idx);
    //console.log(curNav)
    console.log(idx)    
  }

  return (
    <>
      <Main handleClickForService = {handleClickForService}/>
      <NavBar curNav = {curNav} 
        selectNavHandler = {selectNavHandler} 
        handleTop={handleTop}
        hasAccessToken={hasAccessToken} logoutHandler={logoutHandler}
        setPostsData = { setPostsData }
        setPostsString = { setPostsString }
      />
      {curNav === 0 ? <Service /> : curNav === 1 ? <Search/> : <Volunteer/>}
      <Footer/>
    </>
  )
}

export default HomePage