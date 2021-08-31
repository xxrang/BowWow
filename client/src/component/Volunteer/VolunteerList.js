import React from 'react'
import {StyledVolunteerList,ServiceVolunteerWrapper } from './StyledVoluteer'
import { useHistory } from 'react-router-dom'
import Fade from "react-reveal/Fade"

const VolunteerList = ({slice ,setPostId }) => {
  let history = useHistory();
  //console.log(serviceImg)

  const postClickHandler = (id) => {
    const dataId = id;
    setPostId(dataId);
    return history.push(`/posts/${id}`);
  };
  return (
    <StyledVolunteerList className = 'volunteer-list-container'>
      {slice.map((el) => {
        return (
          <ServiceVolunteerWrapper 
            onClick= {() => {postClickHandler(el.id)}}
            key={el.id}
            id = 'columns'
            className={"service-img-" + el.id}>
              <Fade top>
            <figure>  
              <img src={el.Image} alt="dog-img" />
              <figcaption className = 'title'>{el.title}</figcaption>
              <figcaption className = 'updated-at'>{el.updatedAt}</figcaption>
            </figure>
            </Fade>
          </ServiceVolunteerWrapper>
        );
      })}
    </StyledVolunteerList>
  );
}

export default VolunteerList
