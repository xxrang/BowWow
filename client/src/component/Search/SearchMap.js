import React, { useRef, useEffect } from "react";
import {StyledSearchMap} from './StyledSearch'
const {kakao} = window;

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

function SearchMap() {

  useEffect(() => {
    kakao.maps.load(() => {
        let el = document.getElementById('map');
        let map = new kakao.maps.Map(el, {
            center: new kakao.maps.LatLng(33.450701, 126.570667)
        })
    })

}, []);
  
  return (
    <StyledSearchMap id="map" ref={container}>
    </StyledSearchMap>

  )
}

export default SearchMap
