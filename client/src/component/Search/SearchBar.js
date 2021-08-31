import React from 'react'
import {StyledSearchBar} from './StyledSearch'

function SearchBar({inputRef , submitHandler}) {
  return (
    <StyledSearchBar className = 'search-bar'>
      <form onSubmit = {(e)=>submitHandler(e)}>
        <input 
        ref = {inputRef}
        type = 'text' 
        placeholder = '유기견 보호소를 검색하세요.'/>
      </form>
      <button>
        <i className="fas fa-search-location"></i>
      </button>
    </StyledSearchBar>
  )
}

export default SearchBar

