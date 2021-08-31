import styled , {keyframes}from 'styled-components'

const mainColor = '#48cfad';
const showTextMoving = keyframes`
from{
  transform: translateY(20px);
  opacity: 0;
}
to{
  transform: translateY(0px);
  opacity: 1;
}
`
const circleShow = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`
export const StyledMain  = styled.main`
  display: flex;
  align-items: center;
  height : 100vh;
  /* overflow: hidden; */
  /* position: relative; */
  background : linear-gradient(#37bc9b,${mainColor});
  >.logo-box{
    /* position: absolute; */
    display: flex;
    align-items: center;
    width: 60%;
    height : 66%;

    background: #fff;
    padding : 30px;
    text-align: center;
    border-radius : 0 50px 50px 0;

    z-index :4;
    animation : ${circleShow} 0.5s;
    animation-delay:2s;
    transition: all 0.3s ease;
    >.logo{
      width : 300px; height : 300px;
    }
    >.home-text {
      text-align : left;
      margin-left: 50px;
      >h1{
      margin : 3px 0px;
      font-size: 40px;
      letter-spacing: 2px;
      }
      >button{
      width: 150px;
      height: 50px;
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
      padding: 10px 25px;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 500;
      font-size: 20px;
      background: transparent;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);

      background: #48cfad;
      background: linear-gradient(10deg, #37bc9b 0%, #48cfad 100%);
      width: 150px;
      height: 50px;
      line-height: 50px;
      padding: 0;
      border:none;
      
      >.shape{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px 20px;
      }
      >.shape:hover{
        color:#48cfad;
        border-radius: 10px 20px;
        z-index : 1000;
      }
      >.shape:before,.shape:after{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: #48cfad;
        transition: all 0.3s ease;
        border-radius: 10px 20px;
      }
      >.shape:before{
        width: 2px;
        height: 0%;
      }
      >.shape:after{
        width: 0%;
        height: 2px;
      }
      >.shape:hover:before{
        height: 100%;
      }
      >.shape:hover:after{
        width: 100%;
      }
    }
    /*커스텀 버튼 */
    >button::before,button::after{
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: #48cfad;
        transition: all 0.3s ease;
      }
      >button::before{
        height: 0%;
        width: 2px; 
      }
      >button::after{
        width: 0%;
        height: 2px;
      }
      >button:hover{
        background: transparent;
        box-shadow: none;
      z-index : 1000;
      }
      >button:hover:before{
        height: 100%;
      z-index : 1000;
      }
      >button:hover:after{
        width: 100%;
      }
    }

    /*메인텍스트 무빙효과 
    >.home-text {
      >.stagger-item{
        animation : ${showTextMoving} 0.5s;
        animation-fill-mode : both;
      }
      >.stagger-item:nth-child(1){
        animation-delay: 0.1s;
      }
      >.stagger-item:nth-child(2){
        animation-delay: 0.2s;
      }
      >.stagger-item:nth-child(3){
        animation-delay: 0.3s;
      }
    }
    */
  }
`

//첫번째 try mai ,, ,, 
export const BackgroundCircle = styled.div`
width : 100%;
height : 100vh;
margin : 0;
//background: linear-gradient(#aae3d4,${mainColor});
>div{
  border-radius : 50% 50% 0 0;
  position: absolute;
  animation : ${circleShow} 1s;
  animation-timing-function : cubic-bezier(0.19,
    1,22,1);
  animation-fill-mode : both;
}

>div:nth-child(1){
  z-index :3;
  width : 120%;
  height : 700px;
  background-color : #349179;
  bottom : -250px;
  left : -10px;
  overflow: hidden;
  transform : rotate(-10deg);
  animation : ${circleShow} 0.5s;
  animation-delay:0s;
}
>div:nth-child(2){
  z-index :2;
  width : 100%;
  height : 800px;
  background-color : ${mainColor};
  bottom : -250px;
  left : -200px;
  transform : rotate(25deg);
  animation : ${circleShow} 0.5s;
  animation-delay:0.5s;
}
>div:nth-child(3){
  z-index :1;
  width : 100%;
  height : 900px;
  background-color : #aae3d4;
  bottom : -70px;
  transform : rotate(-10deg);
  left : 204px;
  animation : ${circleShow} 0.5s;
  animation-delay:1s;
}
`

//두번째 버전..
export const MainVersion2 = styled.div`

`