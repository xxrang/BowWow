import React,{useState} from 'react'
import VolunteerList from './VolunteerList'
import dummySample from '../Service/dummySample'
import {StyledVolunteer} from './StyledVoluteer'


const Volunteer = () => {

  const [volunteerDog, setVolunteerDog] = useState(dummySample)
  return (
    <StyledVolunteer>
      <VolunteerList volunteerDog = {volunteerDog}/>
      <button>More</button>
    </StyledVolunteer>
  )
}

export default Volunteer
