import styled from 'styled-components'

export const StyledVolunteer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 200px 0px;
>.more-btn{
  border :none;
  margin: 80px auto 0px;
  width: 100px;
  font-size: 16px;
  padding : 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #48cfad;
  color : white;
  :hover{
    background: #fff;
    border: 1px solid #48CFAD;
    color: #48CFAD;
    transition: all 0.3s ease;
  }
}
`
export const StyledVolunteerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 200px 200px; 
  margin: 100px 200px 0px;
>div{
  text-align: center;
  padding: 15px;
  overflow: hidden;
  box-sizing: border-box;
  height: 220px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover{
    transform: scale(1.1);
    }
  >img {
    height: 70%;
    object-fit: contain;
  }
  >p{
    margin-left: 20px;
  }
}

`
