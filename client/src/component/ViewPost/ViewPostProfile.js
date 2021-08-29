/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect} from 'react';
import {
  StyledViewPostProfile,
  ProfileInfoBtn,
} from "./StyledViewPost";
import {Link,useHistory} from 'react-router-dom'
import userPhotos from "../../images/bros_blank.jpg";
//import axios from 'axios'

const ViewPostProfile = ({hasAccessToken}) => {
  
  let history = useHistory();
  const deletePostHandler = (e) => {
    console.log(e.target.value);
    // 액세스 토큰이 있고, 로그인 사용자가 나와 같을때 
    // getItem 한거를 조회하고 그 조회한 작성글을 removeItem했을때 동작하는 함수.
    window.localStorage.removeItem('');
    history.push('/')

    //axios 요청이 불가능하니까 일단 로컬스토리지에서 토큰여부체크
    /*if(hasAccessToken !== undefined){
      axios.delete('https://localhost:4000',
      '', 
      {
        withCredential : true
      }
    )
    .then((res)=>{
      //posts_id 와 일치하는거 삭제 .. ? 졸려 잔다.
    })
    .then((data)=>{

    })
    .catch((err)=>{
      console.log(err);
    })
    }*/

  }
  //수정 삭제 보여주는것. 포스트 들어가자마자 일치여부 확인
  useEffect(()=>{
  },[])

  return (
    <StyledViewPostProfile>
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img src={userPhotos} alt="user-photo" width="60px" height="60px" />
        </div>
        <div className="profile-info-wrapper">
          <h2>Title 들어갑니다 여기에~~~</h2>
          <p>
            haribo <span> 2021. 08. 26.</span>
          </p>
        </div>
        {/*hasAccessToken 이 작성자와 일치한다면*/}
        <ProfileInfoBtn >
          <Link to="/postedit">수정</Link>
          <button type="button" onClick={deletePostHandler}>삭제</button>
        </ProfileInfoBtn>
        {/*
        : 
        null}
        */}
      </div>
    </StyledViewPostProfile>
  );
};

export default ViewPostProfile;