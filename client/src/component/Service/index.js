import React ,{useState}from 'react'
import { StyledService } from './StyledService'
import dummySample from './dummySample'
import ServiceList from './ServiceList'

const Service = () => {

  const [ serviceImg, setServiceImg ] = useState(dummySample);
  return (
    <StyledService>
      <button className ='postBtn'><p>Post</p></button>
      <ServiceList serviceImg = {serviceImg}/>
      <button className ='moreBtn' >More</button>
    </StyledService>
  );
}

export default Service;