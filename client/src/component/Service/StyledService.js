import styled from 'styled-components';

export const StyledService = styled.section`
  width : 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  >.more-btn,.post-btn{
    background:#48CFAD ;
    border : none;
    border-radius: 10px;
    color:white;
    padding : 10px;
  }
  >.more-btn{
    margin : 0 auto 80px;
    width : 100px;
    font-size: 16px;
  }
  >.post-btn{
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
      border: 1px solid #48CFAD;
      color: #48CFAD;
      transition: all 0.3s ease;
    }
`;
export const StyledServiceList = styled.div`
>div{
  /*display:flex;
  flex-wrap: wrap;
  */
  margin : 100px 200px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px 250px; 
}
`
export const StyledServiceListItem = styled.div`
>a{
  text-decoration: none;
  color : black;
}
>a>div{
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  overflow: hidden;
  box-sizing: border-box;
  width: 300px;
  height: 220px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover{
    transform: scale(1.1);
    }
  >img {
    width: 100%;
    height: 70%;
    object-fit: contain;
  }
}
`
