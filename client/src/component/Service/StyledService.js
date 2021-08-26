import styled from 'styled-components';

export const StyledService = styled.section`
  width : 100%;
  height : 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  >.moreBtn,.postBtn{
    background:#48CFAD ;
    border : none;
    border-radius: 20px;
    padding: 20px;
    color:white;
  }
  >.moreBtn{
    margin : -20px auto;
    width : 150px;
    font-size: 20px;
  }
  >.postBtn{
    width : 100px;
    height : 100px;
    border-radius: 0 0 100px 0;
    margin-top: -78px;
    position: sticky;
    top:79px;
    >p{
      margin : -20px 0 0 -10px;
      font-size: 20px;
    }
  }
  >button:hover{
      opacity: 0.7;
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
`;
export const StyledServiceList = styled.div`

  margin : 150px 200px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px 250px; 
  
  >div{
    box-shadow: 3px 3px 3px 3px lightgray;
    border-radius: 5px;
    margin :5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >img{
      width : 90%;
      height : 60%;
    }
  }

`