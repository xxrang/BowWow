import React from 'react'
import {StyledServiceList} from './StyledService'

const ServiceList = ({serviceImg}) => {

  //console.log(serviceImg)
  return (
    <StyledServiceList>
    {serviceImg.map((el)=>{
      return <div key = {el.id}>
        <img className = 'img' src= {el.image} alt = {el.id} />
        <p>🐶 강아지 {el.id} 🐶 </p>
      </div>
    })}
    </StyledServiceList>
  )
}

export default ServiceList
