import React,{useState} from 'react'
import VolunteerList from './VolunteerList'
import {initialPosts} from '../dummyData'
import {StyledVolunteer} from './StyledVoluteer'


const Volunteer = () => {

  const [volunteerDog, setVolunteerDog] = useState(initialPosts.MainPosts)
  return (
    <StyledVolunteer>
      <VolunteerList volunteerDog = {volunteerDog}/>
      <button className = 'more-btn'>More</button>
    </StyledVolunteer>
  )
}

export default Volunteer
