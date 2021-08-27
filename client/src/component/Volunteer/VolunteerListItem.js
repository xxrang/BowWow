import React from 'react'
import {Link} from 'react-router-dom'
import {StyledVolunteerListItem} from './StyledVoluteer'

const VolunteerListItem = ({volunteerDog}) => {
  console.log(volunteerDog)
  return (
    <StyledVolunteerListItem>
      {volunteerDog.map((el)=>{
        return (
          <Link to = '/viewpost'>
            <div key = {el.id} className = 'volunteer-dog-box'> 
              <img src = {el.Image} alt = 'dog-img'/>
              <p>봉사활동{el.id}번째 강아지</p>
            </div>
        </Link>
        )
      })}
    </StyledVolunteerListItem>
  )
}

export default VolunteerListItem
