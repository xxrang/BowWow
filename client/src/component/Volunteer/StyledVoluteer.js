import styled from 'styled-components'

export const StyledVolunteer = styled.section`
>button{
  border :none;
  padding : 10px;
  border-radius: 5px;
  background-color: #48cfad;
  color : white;
  font-size: 16px;
}
`
export const StyledVolunteerList = styled.div`
>div{
  margin : 150px 200px 0;
  border:3px solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px 250px; 
}

`
export const StyledVolunteerListItem = styled.div`
>div{
  border:3px solid;
  width : 100%;
  display: flex;
  align-items: center;
  >img{
    width : 100px;height : 100px;
    border-radius: 2px;
    margin : 0 20px;
  }
}

`