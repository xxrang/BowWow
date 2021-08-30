import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledService } from "./StyledService";
import ServiceList from "./ServiceList";
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
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`);

    setSlice(postsData.slice(0, maxDogList));
  };
  /*useEffect(()=>{
    axios.get('https://localhost:4000/service',
    {withCredential : true}
    )
    //if category_id 가 1번이면  category_id 1번의 이미지와 컨텐츠요청 받아오는거
    .then((res)=>{
      //res.body? chk ? 
    })
    .then((data)=>{

    })
  },[])
  */
  useEffect(() => {
    // setCount(count + 1);
    if (postsData) {
      setSlice(postsData.slice(0, maxDogList));
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
