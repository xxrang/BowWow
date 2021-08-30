import React from 'react'
import {StyledSearchBar} from './StyledSearch'

function SearchBar({inputRef}) {
  return (
    <StyledSearchBar>
      <input 
      ref = {inputRef}
      type = 'text' 
      placeholder = '유기견 보호소를 검색하세요.'/>
      <button>검색</button>
    </StyledSearchBar>
  )
}

export default SearchBar
