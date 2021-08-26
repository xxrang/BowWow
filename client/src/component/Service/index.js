import React ,{useState}from 'react'
import { StyledService } from './StyledService'
import dummySample from './dummySample'
import ServiceList from './ServiceList'

const Service = () => {

  const [ serviceImg, setServiceImg ] = useState(dummySample);
  return (
    <StyledService id = 'service-container'>
      <button className ='post-btn'><p>Post</p></button>
      <ServiceList 
      serviceImg = {serviceImg} />
      <button className ='more-btn'>More</button>
    </StyledService>
  );
}

export default Service;