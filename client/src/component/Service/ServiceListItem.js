import React from 'react'
import {Link} from 'react-router-dom'
import {StyledServiceListItem} from './StyledService'

const ServiceListItem = ({serviceImg}) => {
  //console.log(serviceImg)
  return (
    <StyledServiceListItem>
      {serviceImg.map((el)=>{
        return (
          <>
          <Link to = 'viewpost' >
            <div className = {'service-img-'+el.id}  key = {el.id} >
              <img src = {el.Image} alt = 'dog-img'/>
              <p>서비스화면의{el.id}번째 강아지</p>
            </div>
        </Link>
        </>)
      })}
    </StyledServiceListItem>
  )
}

export default ServiceListItem
