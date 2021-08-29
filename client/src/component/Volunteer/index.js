import React, { useState } from "react";
import VolunteerList from "./VolunteerList";
import { StyledVolunteer } from "./StyledVoluteer";
// import axios from "axios";

const Volunteer = ({ postsData, navString, setPostId, postId }) => {
  const [maxDogList, setMaxDogList] = useState(6);
  const slice = postsData.slice(0, maxDogList);
  const moreButtonHandler = () => {
    setMaxDogList((prevValue) => prevValue + 6);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`);
  };

  /*
    포스트 아이디에 따라 페이지 나뉜다. 
    useEffect(()=>{
    axios.get('https://localhost:4000/volunteer/${postId}',
    { withCredentials: true }
    )
    .then((res)=>{
      console.log(res.data)
    })
    .then((data)=>{
      console.log(data)
    })
  },[])
  */
  return (
    <StyledVolunteer>
      <VolunteerList 
      slice={slice} 
      setPostId = {setPostId}/>
      <button onClick={moreButtonHandler} className="more-btn">
        More
      </button>
    </StyledVolunteer>
  );
};

export default Volunteer;
