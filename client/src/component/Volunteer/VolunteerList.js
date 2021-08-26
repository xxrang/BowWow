import React from 'react'
import VolunteerListItem from './VolunteerListItem'
import {StyledVolunteerList} from './StyledVoluteer'

const VolunteerList = ({volunteerDog}) => {
  //console.log(volunteerDog)
  return (
    <StyledVolunteerList>
        <VolunteerListItem volunteerDog = {volunteerDog}/>
    </StyledVolunteerList>
  )
}

export default VolunteerList
