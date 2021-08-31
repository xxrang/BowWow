import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  color :#fff;
`;

const Container = styled.div`
  margin : 0 80px;
  width : 30%;
  height : 66%;
  border-radius: 10px;
  >ul>.slick-active{
    padding :0;
    background-color: #F8CD07 !important;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
  /* >.slick-slider{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height : 300px;
    margin : 10px;
    padding : 10px;
    border-radius: 10px;
  } */
`;
function MainSlider() {
  const settings = {
    dots: true,  // 슬라이드 밑에 점 보이게
    lazyLoad : true,
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,  // 넘어가는 속도
    slidesToShow: 1,  // 4장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
  return (
    <>
    <Container>
      <Slider {...settings} >
          <div className='slider-wrapper'>
            <h2>Service</h2>
            <h3>유기견 봉사활동일정을<br/> 한눈에 볼 수 있어요.</h3>
          </div>
          <div className='slider-wrapper'>
            <h2>Search</h2>
            <h3>전국의 모든 유기견 보호소를<br/> 찾을 수 있어요.</h3>
          </div>
          <div className='slider-wrapper'>
            <h2>Volunteer</h2>
            <h3>생생한 입양 및 봉사후기를<br/> 볼 수 있어요.</h3>
          </div>
      </Slider>
      </Container>
    </>
  )
}

export default MainSlider
