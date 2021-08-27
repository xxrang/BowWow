import React,{useState,useEffect} from 'react'
import { StyledMain } from './StyledMain'
//import ScrollReveal from 'scrollreveal'

const Home = () => {

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

  const handleClickForService = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 950,
      behavior: "smooth"
    });
    setScrollY(950);  // ScrollY 의 값을 초기화
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

  /*ScrollReveal({
    reset: true,
    delay: 300,
    duration: 400,
  });
  
  ScrollReveal().reveal('.paw1', { delay: 300 });
  ScrollReveal().reveal('.paw2', { delay: 600 });
  ScrollReveal().reveal('.paw3', { delay: 900 }); 
  ScrollReveal().reveal('.rightBox', { delay: 1200 }); 
  */

  return (
    <StyledMain>
      <div className = 'pawImgs'>
        <img className = 'paw1' src = '../images/paw.jpg' alt = 'paw' />
        <img className = 'paw2' src = '../images/paw.jpg' alt = 'paw' />
        <img className = 'paw3' src = '../images/paw.jpg' alt = 'paw' />
      </div>
      <div className = 'rightBox'>
        <img className = 'logo' src = '../images/logo.png' alt ='logoImg/'/>
        <div className = 'homeText'>
          <p>유기견 보호 커뮤니티,</p>
          <p><span 
          style = {
            {color : '#48cfad', 
            fontSize : '32px',
            fontWeight : '800'}}>BowWow</span> 와 함께하세요. </p>
        </div>
        
        <button onClick = {handleClickForService}><span className = 'shape'>Get Start!</span></button>
      </div>
    </StyledMain>
  )
}

export default Home
