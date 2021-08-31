import styled from 'styled-components'

export const StyledVolunteer = styled.section`
  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

>.more-btn{
  border :none;
  width: 100px;
  font-size: 16px;
  padding : 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #48cfad;
  color : white;
  margin : 50px 0;
  :hover{
    background: #fff;
    border: 1px solid #48CFAD;
    color: #48CFAD;
    transition: all 0.3s ease;
  }
}
`
export const StyledVolunteerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin : 100px 200px 0;
`
export const ServiceVolunteerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  /* width: 450px; */
  height: 220px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    background : rgba(0, 0, 0, 0.1);
    overflow:hidden;
    opacity : 0.9;
  }
  >img {
    width: 50%;
    height: 100%;
    object-fit: contain;  
    background: rgba(0,0,0,0.1);
    padding : 10px 0;
    overflow: hidden;
    &:hover{
      transform: scale(1.1);
      backface-visibility: hidden;
      transition: all 0.4s ease-in-out;
    }
  }
  >h1{
    margin: 10px 20px;
    font-size: 30px;
  } 
`