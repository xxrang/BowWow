import styled from "styled-components";

const mainColor = '#48cfad';

export const StyledService = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  >.btn-box{
    text-align: center;
    margin-top : 30px;
    > .buttons, a>.buttons {
    background: ${mainColor};
    border: none;
    border-radius: 10px;
    color: white;
    width: 100px;
    height: 40px;
    font-size: 16px;
    margin : 5px 5px 50px;
  }
  >a>.buttons{
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
  >.more-btn:hover {
    background: #fff;
    border: 1px solid #48cfad;
    color: #48cfad;
    transition: all 0.3s ease;
  }
}
`;
export const StyledServiceList = styled.div`
  /*display:flex;
  flex-wrap: wrap;
  */
    margin: 100px 200px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 220px 220px 220px;
`;

export const ServiceListWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  overflow: hidden;
  box-sizing: border-box;
  width: 300px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    background : rgba(0, 0, 0, 0.1);
    overflow:hidden;
    opacity : 0.9;
  }
`;
export const ServiceListP = styled.p`
margin-top: 24px;
padding-left: 5px;
font-size: 20px;
font-weight : 500;
text-align : left;
`;
export const ServiceListImg = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
  background: rgba(0,0,0,0.1);
  padding : 10px 0;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
    backface-visibility: hidden;
    transition: all 0.4s ease-in-out;
  }
`;