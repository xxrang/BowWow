import styled from 'styled-components'

export const StyledVolunteer = styled.section`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
>.more-btn{
  width : 100px;
  border :none;
  margin : -50px auto;
  padding : 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #48cfad;
  color : white;
  font-size: 16px;
  :hover{
    background: #fff;
    border: 1px solid #48CFAD;
    color: #48CFAD;
    transition: all 0.3s ease;
  }
}
`
export const StyledVolunteerList = styled.div`
>div{
  margin : 150px  0;
  display: grid;
  grid-template-columns: 450px 450px ;
  grid-template-rows: 250px 250px; 
}
`
export const StyledVolunteerListItem = styled.div`
>a{
  text-decoration: none;
  color :black;
}
>a>.volunteer-dog-box{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  width: 95%;
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
    height: 70%;
    object-fit: contain;
  }
  >p{
    margin-left: 20px;
  }
}
`