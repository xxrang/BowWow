import styled from 'styled-components'

export const StyledMain  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height : 100vh;
  >.pawImgs{
    width : 40%;
    text-align: center;
    >img:nth-child(1){
      width : 120px; height :120px;
      margin : 10px;
    }
    >img:nth-child(2){
      width : 140px; height :140px;
      margin : 10px;
    }
    >img:nth-child(3){
      width : 160px; height :160px;
      margin : 10px;
    }
  }
  >.rightBox{
    padding : 30px;
    text-align: center;
    transition: all 0.3s ease;
    >.logo{
      margin-top: -150px;
      width : 100%; height : 100%;
    }
    >.homeText {
      margin-top: -80px;
      > p{
      margin : 3px;
      font-size: 20px;
      letter-spacing: 2px;
      }
    }
    >button{
      width: 150px;
      height: 50px;
      color: #fff;
      border-radius: 10px 20px;
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
      border: none;
      
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
      }
      >button:hover:before{
        height: 100%;
      }
      >button:hover:after{
        width: 100%;
      }
  }
`