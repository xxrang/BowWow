import React, { useEffect, useState } from "react";
import { StyledService } from "./StyledService";
import ServiceList from "./ServiceList";
// import axios from "axios";

const Service = ({ postsData, setPostId, navString}) => {
  
  const [maxDogList, setMaxDogList] = useState(9);
  const [slice, setSlice] = useState([]);
  
  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 9);
    setSlice(postsData.slice(0, maxDogList));
  };

  useEffect(() => {
   if(navString === 'service')
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }, [navString]);

    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }
  }, [maxDogList, postsData]);
  
  return (
    <StyledService id="service-container">
      <ServiceList
        setPostId={setPostId}
        slice={slice}
      />
      <div className = 'btn-box'>
      <button 
      onClick={moreButtonHandler} 
      className="buttons more-btn">
        More
      </button>
      </div>
    </StyledService>
  );
};

export default Service;
