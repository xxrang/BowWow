import styled from 'styled-components'

export const StyledNavBar = styled.nav`
  width: 100%;
  height : 80px;
  background :linear-gradient(45deg, #48cfad , #37BC9B) ;
  position : sticky;
  top:0;

>ul{
  display: flex;
  >.leftNav{
    width : 60%;
    height : 80px;
    display: flex;
    align-items: center;
    >a{
      text-decoration: none;
      >img{
        margin-right: 20px;
        width : 60px; height :60px;
        border-radius: 5px;
      }
      >li{
        list-style: none;
        margin : 0 15px;
        font-size: 18px;
        color :white;
        font-family: lato;
        &:hover{
          transform: scale(1.1)
        }
      }
    }
  }
  >.rightNav{
      width : 40%;
      height : 80px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 30px;
    >a>button{
      color : #48cfad;
      margin : 0 5px;
      padding-bottom : 5px;
      width: 80px;
      height : 40px;
      border:none;
      border-radius: 10px;
      background: white;
      font-family: lato;
      font-size : 16px;
      &:hover{
          background-color: #48cfad;
          color : white;
        }
    }
  }
}
`