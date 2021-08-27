import React from 'react'
import {StyledServiceListItem} from './StyledService'

const ServiceListItem = ({serviceImg}) => {
  console.log(serviceImg)
  return (
    <StyledServiceListItem>
      {serviceImg.map((el)=>{
        return <div key = {el.id} className = {'service-img-'+el.id}  >
          <img src = {el.Image} alt = 'dog-img'/>
          <p>{el.id}번째 강아지</p>
        </div>
      })}
    </StyledServiceListItem>
  )
}

export default ServiceListItem
