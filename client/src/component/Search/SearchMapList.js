import React from 'react'
import {StyledSearchMapList} from './StyledSearch'

function SearchMapList() {
  return (
    <StyledSearchMapList>
      <div className = 'searchMapListWrapper'>
      <h1>유기견 보호소1</h1>
      <hr/>
      <p>Location_<span>경기도 김포시 걸포2로</span></p>
      <p>Mobile_<span>010.1234.1234</span></p>
      </div>

      <div className = 'searchMapListWrapper'>
      <h1>유기견 보호소2</h1>
      <hr/>
      <p>주소</p>
      <p>전화번호</p>
      </div>

      <div className = 'searchMapListWrapper'>
      <h1>유기견 보호소3</h1>
      <hr/>
      <p>주소</p>
      <p>전화번호</p>
      </div>

      <div className = 'searchMapListWrapper'>
      <h1>유기견 보호소4</h1>
      <hr/>
      <p>주소</p>
      <p>전화번호</p>
      </div>
    </StyledSearchMapList>
  )
}

export default SearchMapList
