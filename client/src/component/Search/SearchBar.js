import React, { useState } from "react";
import styled from "styled-components";

const styledSearchBar = styled.div`
  width: 375px;

  > searchInputs {
    width: 375px;

    > input {
      width: 375px;
    }
  }
`;

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleData = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFiltered = data.filter((el) => {
      return el.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord.length === 0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFiltered);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <styledSearchBar className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleData}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                target="_blank"
                rel="noreferrer"
                onClick={clearInput}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </styledSearchBar>
  );
}

export default SearchBar;
