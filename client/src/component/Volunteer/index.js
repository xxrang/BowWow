import React, { useState, useEffect } from "react";
import VolunteerList from "./VolunteerList";
import { StyledVolunteer } from "./StyledVoluteer";
import axios from "axios";

const Volunteer = ({ postsData, postsString, setDataId, DataId }) => {
  const [maxDogList, setMaxDogList] = useState(6);
  const slice = postsData.slice(0, maxDogList);
  const moreButtonHandler = () => {
    setMaxDogList((prevValue) => prevValue + 6);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`);
  };

  /*
    app.js 로 이동, pos
    useEffect(()=>{
    axios.get('https://localhost:4000/posts/volunteer_list?',
    //data,
    {withCredential : true}
    )
    //
    .then((res)=>{
      //res.body? chk ? 
    })
    .then((data)=>{

    })
  },[])
  */
  return (
    <StyledVolunteer>
      <VolunteerList slice={slice} />
      <button onClick={moreButtonHandler} className="more-btn">
        More
      </button>
    </StyledVolunteer>
  );
};

export default Volunteer;
