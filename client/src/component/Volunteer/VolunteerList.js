import React from 'react'
import {StyledVolunteerList } from './StyledVoluteer'
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
    <StyledVolunteerList>
      {slice.map((el) => {
        return (
          <div
            onClick= {() => {postClickHandler(el.id)}}
            key={el.id}
            className={"service-img-" + el.id}>
            <p>{el.id}</p>
            <img src={el.Image} alt="dog-img" />
            <p>{el.content}</p>
          </div>
        );
      })}
    </StyledVolunteerList>
  );
}

export default VolunteerList
