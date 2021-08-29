import React from 'react'
import VolunteerListItem from './VolunteerListItem'
import {StyledVolunteerList} from './StyledVoluteer'

const VolunteerList = ({slice}) => {
  //console.log(volunteerDog)
  return (
    <StyledVolunteerList>
      <VolunteerListItem slice={slice} />
    </StyledVolunteerList>
  );
}

export default VolunteerList
