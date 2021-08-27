import React from 'react'
import ServiceListItem from './ServiceListItem'
import {StyledServiceList} from './StyledService'

const ServiceList = ({slice}) => {
  //console.log(serviceImg)
  return (
    <StyledServiceList>
      <ServiceListItem 
      slice = {slice}/>
    </StyledServiceList>
  )
}

export default ServiceList
