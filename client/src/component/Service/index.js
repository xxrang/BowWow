import React, { useEffect, useState } from "react";
import { StyledService } from "./StyledService";
import ServiceList from "./ServiceList";
// import axios from "axios";

const Service = ({ navString, postsData, setPostId, postId }) => {
  
  const [maxDogList, setMaxDogList] = useState(9);
  const [slice, setSlice] = useState([]);
  // console.log("slice-------", slice);
  //const [ serviceImg, setServiceImg ] = useState(initialPosts.MainPosts);
  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 9);
    setSlice(postsData.slice(0, maxDogList));
  };

  useEffect(() => {
    // setCount(count + 1);
    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }

    // if (initialPosts) {
    //   setSlice(initialPosts.service.slice(0, maxDogList));
    // } else {
    //   return null;
    // }
  }, [maxDogList, postsData]);
  return (
    <StyledService id="service-container">
      <ServiceList
        postsData={postsData}
        setPostId={setPostId}
        postId={postId}
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
