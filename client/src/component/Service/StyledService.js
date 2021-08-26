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
    border-radius: 10px;
    padding: 20px;
    color:white;
  }
  >.moreBtn{
    margin : -20px auto;
    width : 100px;
    font-size: 16px;
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
      background: #fff;
      border: 2px solid #48CFAD;
      color: #48CFAD;
      transition: all 0.3s ease;
    }
`;
export const StyledServiceList = styled.div`
>div{
  margin : 150px 200px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px 250px; 
}
`
export const StyledServiceListItem = styled.div`
>div{
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  width: 95%;
  height: 200px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover{
    transform: scale(1.1);
    }
    >img{
    width : 90%;
    height : 60%;
  }
  }
`
