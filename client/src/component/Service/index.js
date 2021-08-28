import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import { StyledService } from './StyledService'
import  {initialPosts} from '../dummyData'
import ServiceList from './ServiceList'
import axios from 'axios'

const Service = () => {

  //const [ serviceImg, setServiceImg ] = useState(initialPosts.MainPosts);
  const serviceImg = initialPosts.MainPosts
  const [ maxDogList, setMaxDogList ] = useState(9);
  const slice = serviceImg.slice(0,maxDogList);

  const moreButtonHandler = () => {
    setMaxDogList((prevValue)=>prevValue+9);
    //console.log(slice)
    console.log(`강아지가 ${maxDogList}마리씩 늘어나고있는중.`)
  }
  /*useEffect(()=>{
    axios.get('https://localhost:4000/posts/service_list????',
    //data,
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

  return (
    <StyledService id = 'service-container'>
      <ServiceList slice = {slice} serviceImg = {serviceImg}/>
      <Link to ='/postform'><button className ='post-btn'><p>Post</p></button></Link>
      <button onClick = {moreButtonHandler} className ='more-btn'>More</button>
    </StyledService>
  );
}

export default Service;