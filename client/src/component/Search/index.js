import React from "react";
import { StyledSearch } from "./StyledSearch";
import SearchBar from "./SearchBar";

function Search() {
  return <StyledSearch className="search-page">
    <SearchBar />
  </StyledSearch>;
}

export default Search;
