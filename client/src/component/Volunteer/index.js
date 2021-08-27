import React,{useState} from 'react'
import VolunteerList from './VolunteerList'
import {initialPosts} from '../dummyData'
import {StyledVolunteer} from './StyledVoluteer'


const Volunteer = () => {

  const volunteerDog = initialPosts.MainPosts
  const [ maxDogList, setMaxDogList ] = useState(6);
  const slice = volunteerDog.slice(0,maxDogList);
  const moreButtonHandler = () => {
    setMaxDogList((prevValue)=>prevValue+6);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`)
  }

  return (
    <StyledVolunteer>
      <VolunteerList slice = {slice} volunteerDog = {volunteerDog}/>
      <button onClick = {moreButtonHandler}className = 'more-btn'>More</button>
    </StyledVolunteer>
  )
}

export default Volunteer
