import React from 'react'
import {StyledSearchMapList} from './StyledSearch'


function SearchMapList({mapData,setKeyword}) {
  
  function clickChange(e){
   let clickWord = e.currentTarget.children[0].textContent
   setKeyword(clickWord)
  }

  return (
    <StyledSearchMapList>
    {mapData.map((el) => {
        return(
        <div key={el.id} className = 'searchMapListWrapper' onClick={clickChange}>
          <h1>{el.place_name}</h1>
          <hr/>
          <p>Location_<span>{el.address_name}</span></p>
          <p>Mobile_<span>{el.phone}</span></p>
        </div>
        )

      })}
    </StyledSearchMapList>
  )
}

export default SearchMapList
