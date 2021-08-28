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
            <div className = {'service-img'}  key = {el.id} >
              <p>{el.tempId}</p>
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
