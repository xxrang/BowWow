import React , {useEffect,useRef} from "react";
import { StyledSearch } from "./StyledSearch";
import SearchBar from './SearchBar'
import SearchMap from './SearchMap'
import SearchMapList from './SearchMapList'

function Search() {
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  })
  return <StyledSearch className="search-page">
      <div className = 'searchWrapper'>
        <SearchBar 
        inputRef={inputRef}
        />
        <SearchMapList/>
      </div>
      <SearchMap/>

  </StyledSearch>;
}

export default Search;
