import React from 'react'
import ServiceListItem from './ServiceListItem'
import {StyledServiceList} from './StyledService'

const ServiceList = ({serviceImg}) => {
  //console.log(serviceImg)
  return (
    <StyledServiceList>
      <ServiceListItem serviceImg={serviceImg}/>
    </StyledServiceList>
  )
}

export default ServiceList
