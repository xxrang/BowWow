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
              postClickHandler(el.id);
            }}
            key={el.id}
            className={"service-img-" + el.id}>
            <ServiceListImg src={el.image} alt="dog-img" />
            <ServiceListP>{el.title}</ServiceListP>
          </ServiceListWrapper>
        );
      })}
    </StyledServiceList>
  );
};

export default ServiceList
