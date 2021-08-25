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
        margin : 0 10px;
        font-size: 18px;
        color :white;
        font-family: lato;
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
      margin : 0 5px;
      border:none;
      padding :10px 15px;
      border-radius: 10px;
      background: white;
      font-family: lato;
    }
  }
}
`