import React ,{useState}from 'react'
import { StyledService } from './StyledService'
import  {initialPosts} from '../dummyData'
import ServiceList from './ServiceList'

const Service = () => {

  const [ serviceImg, setServiceImg ] = useState(initialPosts.MainPosts);
  console.log(serviceImg)
  return (
    <StyledService id = 'service-container'>
      <button className ='post-btn'><p>Post</p></button>
      <ServiceList serviceImg = {serviceImg}/>
      <button className ='more-btn'>More</button>
    </StyledService>
  );
}

export default Service;