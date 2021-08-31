import React , {useState,useEffect,useRef} from "react";
import { StyledSearch } from "./StyledSearch";
import SearchBar from './SearchBar'
import SearchMap from './SearchMap'
import SearchMapList from './SearchMapList'

function Search() {
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  })

  const [Keyword, setKeyword] = useState("이태원맛집");
//  const [Keyword123213, setKeyword] = useState([data]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    console.log('지도찾기')
    setKeyword(e.target[0].value)
  }

  

  return <StyledSearch className="search-page">
      <div className = 'searchWrapper'>
        <SearchBar 
        setKeyword={setKeyword}
        inputRef={inputRef}
        submitHandler = {submitHandler}
        />
        <SearchMapList/>
      </div>
      <SearchMap Keyword={Keyword}/>

  </StyledSearch>;
}

export default Search;
