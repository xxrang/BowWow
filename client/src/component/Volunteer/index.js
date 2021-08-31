import React, { useState, useEffect} from "react";
import VolunteerList from "./VolunteerList";
import { StyledVolunteer } from "./StyledVoluteer";
//  import axios from "axios";

const Volunteer = ({ postsData, navString, setPostId, postId }) => {
  const [maxDogList, setMaxDogList] = useState(6);
  const [slice, setSlice] = useState([]);
  const moreButtonHandler = () => {
    setMaxDogList(maxDogList + 6);
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
    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
    } else {
      return null;
    }
  }, [maxDogList, postsData]);
  
  return (
    <StyledVolunteer>
      <VolunteerList 
      slice={slice} 
      setPostId = {setPostId}/>
      <button 
      onClick={moreButtonHandler} 
      className="more-btn">
        More
      </button>
    </StyledVolunteer>
  );
};

export default Volunteer;
