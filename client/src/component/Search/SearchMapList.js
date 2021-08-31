import React from 'react'
import {StyledSearchMapList} from './StyledSearch'

function SearchMapList() {
  return (
    <StyledSearchMapList>
      <div className = 'search-maplist-wrapper'>
      <h2>서울유기동물입양센터</h2>
      <hr/>
      <div>
        <span className = 'search-location'>Location_</span><span>서울특별시 중랑구</span><br/>
        <span className = 'search-mobile'>Mobile___</span><span>02.6958.6224</span>
      </div>
      </div>

      <div className = 'search-maplist-wrapper'>
      <h2>시흥엔젤홍유기견 보호소</h2>
      <hr/>
      <div>
        <span className = 'search-location'>Location_</span><span>광명동 189-66번지</span><br/>
        <span className = 'search-mobile'>Mobile___</span><span>02.2060.2488</span>
      </div>
      </div>

      <div className = 'search-maplist-wrapper'>
      <h2>카라입양카페</h2>
      <hr/>
      <div>
        <span className = 'search-location'>Location_</span><span>서울특별시 마포구</span><br/>
        <span className = 'search-mobile'>Mobile___</span><span>02.6381.0999</span>
      </div>
      </div>

      <div className = 'search-maplist-wrapper'>
      <h2 className = 'search-location'>경기도 도우미견 나눔센터</h2>
      <hr/>
      <div>
        <span className = 'search-location'>Location_</span><span>경기도 화성시 마도면</span><br/>
        <span className = 'search-mobile'>Mobile___</span><span>031.8008.6721</span>
      </div>
      </div>
    </StyledSearchMapList>
  )
}

export default SearchMapList
