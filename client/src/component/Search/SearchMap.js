import React, {useState, useRef, useEffect } from "react";
import {StyledSearchMap} from './StyledSearch'
import search from "./Keyword";
const {kakao} = window;

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

function SearchMap({Keyword, dataSet}) {

  
  //const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    // new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴 
    // return () => {};
  //   kakao.maps.load(() => {
  //     let el = document.getElementById('map');
  //     let map = new kakao.maps.Map(el, options)
  // })
  console.log(Keyword)
  console.log("타입1234",typeof(dataSet))
  search(Keyword,dataSet)
  },[Keyword]);

  
  // ref={container}
  return (
    <StyledSearchMap id="map" >
    </StyledSearchMap>

  )
}

export default SearchMap
