import React from 'react'
import {Link} from 'react-router-dom'
import {StyledServiceListItem} from './StyledService'

const ServiceListItem = ({slice}) => {
  //console.log(serviceImg)
  return (
    <StyledServiceListItem>
      {slice.map((el)=>{
        return (
          <>
          <Link to = 'viewpost' >
            <div className = {'service-img-'+el.id}  key = {el.id} >
              <img src = {el.Image} alt = 'dog-img'/>
              <p>{el.content}</p>
            </div>
        </Link>
        </>)
      })}
    </StyledServiceListItem>
  )
}

export default ServiceListItem
