import React ,{useState}from 'react'
import { StyledService } from './StyledService'
import  {initialPosts} from '../dummyData'
import ServiceList from './ServiceList'
import axios from 'axios'

const Service = () => {

  //const [ serviceImg, setServiceImg ] = useState(initialPosts.MainPosts);
  const serviceImg = initialPosts.MainPosts
  const [ maxDogList, setMaxDogList ] = useState(9);
  const slice = serviceImg.slice(0,maxDogList);

  const moreButtonHandler = () => {
    setMaxDogList((prevValue)=>prevValue+9);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`)
  }

  return (
    <StyledService id = 'service-container'>
      <button className ='post-btn'><p>Post</p></button>
      <ServiceList slice = {slice} serviceImg = {serviceImg}/>
      <button onClick = {moreButtonHandler} className ='more-btn'>More</button>
    </StyledService>
  );
}

export default Service;