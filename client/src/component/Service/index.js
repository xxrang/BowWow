import React, { useEffect, useState } from "react";
import { StyledService } from "./StyledService";
import ServiceList from "./ServiceList";
import {initialPosts} from '../dummyData'
// import axios from "axios";

const Service = ({ navString, postsData, setPostId, postId }) => {
  // const [count, setCount] = useState(0);
  // console.log("render:", count);
  const [maxDogList, setMaxDogList] = useState(9);
  const [slice, setSlice] = useState([]);
  // console.log("slice-------", slice);
  //const [ serviceImg, setServiceImg ] = useState(initialPosts.MainPosts);

  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 9);
    //console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`);

    setSlice(postsData.slice(0, maxDogList));
  };

  useEffect(() => {
    // setCount(count + 1);
    /*if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }*/
    if (initialPosts) {
      setSlice(initialPosts.service.slice(0, maxDogList));
    } else {
      return null;
    }
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
