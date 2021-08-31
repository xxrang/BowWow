import React from 'react'
import {StyledVolunteerList,ServiceVolunteerWrapper } from './StyledVoluteer'
import { useHistory } from 'react-router-dom'

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
            className={"service-img-" + el.id}>
            <img src={el.Image} alt="dog-img" />
            <h1>{el.title}</h1>
            <p>{el.updatedAt}</p>
          </ServiceVolunteerWrapper>
        );
      })}
    </StyledVolunteerList>
  );
}

export default VolunteerList
