import React from 'react'
import { useHistory } from 'react-router-dom';
import {
  StyledServiceList,
  ServiceListWrapper,
  ServiceListP,
  ServiceListImg,
} from "./StyledService";

const ServiceList = ({ setPostId, slice }) => {
  let history = useHistory();
  //console.log(serviceImg)

  const postClickHandler = (id) => {
    const dataId = id;
    setPostId(dataId);
    return history.push(`/posts/${id}`);
  };
  return (
    <StyledServiceList>
      {slice.map((el) => {
        return (
          <ServiceListWrapper
            onClick=
            {() => {
              postClickHandler(el.post.id);
            }}
            key={el.post.id}
            className={"service-img-" + el.post.id}>
            <ServiceListP>{el.post.id}</ServiceListP>
            <ServiceListImg src={el.post.image} alt="dog-img" />
            <ServiceListP>{el.post.title}</ServiceListP>
          </ServiceListWrapper>
        );
      })}
    </StyledServiceList>
  );
};

export default ServiceList
