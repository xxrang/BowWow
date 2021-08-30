import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  height : 80px;
  background : #37BC9B;
  position : sticky;
  top:0;
  z-index:10000;

>ul{
  display: flex;
  >.leftNav{
    width : 60%;
    height : 80px;
    display: flex;
    align-items: center;
    >li{
      list-style: none;
      cursor: pointer;
      margin : 0 15px;
      font-size: 22px;
      color :white;
      &:hover{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
      }
      >a>.buttons{
        border: none;
        border-radius: 10px;
        color: white;
        width: 100px;
        height: 40px;
        margin : 5px 5px 50px;
        background: #fff;
        border: 1px solid #48cfad;
        color: #48cfad;
        &:hover{
        background: #48cfad;
        border: none;
        color: #fff;
        transition: all 0.3s ease;
        }
      }
    }
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
          transform: scale(1.1);
          transition: all 0.3s ease-in-out;
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
    >a>button, button{
      border-radius: 10px;
    white-space: nowrap;
    width: 100px;
    height: 48px;

    padding: 10px ;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5rem;

    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s ease-in-out;

    background: #fff;
    color: #48cfad;
    margin : 0 5px;
    &:hover {

      border: 2px solid #48cfad;
      background: #48cfad;
      color: #fff;
      }
    }
    }
  }
`;
