import React from 'react'
import {StyledVolunteerListItem} from './StyledVoluteer'

const VolunteerListItem = ({volunteerDog}) => {
  console.log(volunteerDog)
  return (
    <StyledVolunteerListItem>
      {/*{volunteerDog.map((el)=>{
        return <div key = {el.id} className = 'volunteer-dog-box'> 
          <img src = {el.image} alt = 'dog-img'/>
          <p>{el.id}번째 강아지</p>
        </div>
      })}*/}
    </StyledVolunteerListItem>
  )
}

export default VolunteerListItem
