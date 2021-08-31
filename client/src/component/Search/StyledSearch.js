import styled from "styled-components";
const borderRadius = '1rem 1rem 1rem 1rem'
const searchMainColor = '#37BC9B;'

export const StyledSearch = styled.section`
display: flex;
justify-content: center;
align-items: center;
width : 100%;
height : 100vh;
>.searchWrapper{
  width :375px;
  height : 500px;
  background: ${searchMainColor};
  border-radius : ${borderRadius};
  margin-right : 10px;
  text-align: center;
}
`;
export const StyledSearchBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
>form {
  margin : 30px 0px;
}
>form > input {
  font-size: 16px;
  width : 240px;
  height : 42px;
  padding : 0 10px;
  border-radius : 5px 0 0 5px;
  border:none;
}
>button{
  background: #fff;
  width : 50px;
  height : 42px;
  font-size :20px;
  border : none;
  border-radius: 0 5px 5px 0;
  color : ${searchMainColor};
  &:hover{
    transition: all 0.3s ease-in-out;
    background:#48cfad;
    color : #fff;
  }
}

`
export const StyledSearchMapList = styled.div`
  border-radius : ${borderRadius};
  width : 80%; 
  height: 70%;
  margin : 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  >.searchMapListWrapper{
    border-radius: ${borderRadius};
    margin : 4px;
    background: #fff;
    padding : 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover{
        transform : scale(1.05);
        transition: all 0.3s ease-in-out;
      }
      >h1,p{
      margin : 0;
      padding : 5px 10px;
      text-align: left;
      }
  }

`
export const StyledSearchMap = styled.div`
  width :700px;
  height : 500px;
  border-radius : ${borderRadius};
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 80px;
  padding-top: 100px;
  box-sizing: border-box;
  text-align: center;
`
