import React,{useState,useEffect} from 'react'
import VolunteerList from './VolunteerList'
import {initialPosts} from '../dummyData'
import {StyledVolunteer} from './StyledVoluteer'
import axios from 'axios'

const Volunteer = () => {

  const volunteerDog = initialPosts.MainPosts
  const [ maxDogList, setMaxDogList ] = useState(6);
  const slice = volunteerDog.slice(0,maxDogList);
  const moreButtonHandler = () => {
    setMaxDogList((prevValue)=>prevValue+6);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`)
  }

  /*useEffect(()=>{
    axios.get('https://localhost:4000/posts/volunteer_list?',
    //data,
    {withCredential : true}
    )
    //
    .then((res)=>{
      //res.body? chk ? 
    })
    .then((data)=>{

    })
  },[])
  */
  return (
    <StyledVolunteer>
      <VolunteerList slice = {slice} volunteerDog = {volunteerDog}/>
      <button onClick = {moreButtonHandler}className = 'more-btn'>More</button>
    </StyledVolunteer>
  )
}

export default Volunteer
