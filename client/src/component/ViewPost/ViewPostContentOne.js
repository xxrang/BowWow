import React from 'react'
import { StyledViewPostContentOne } from './StyledViewPost';

const ViewPostContentOne = () => {
  return (
    <StyledViewPostContentOne>
      <div className="img-wrapper">
        <img
          src={require("../../images/9.png").default} alt="백구"/>
      </div>
      <div className="post-info-all">
        <div className="post-info-two">
          <div>봉사 날짜: </div>
          <div className="post-info-date">2021월 9월 4일 3시</div>
          <div className="post-info-location">서울시 용산구 후암동 asdas</div>
        </div>
        <div className="post-info-mobile">010-7185-2791</div>

        <div className="post-info-content">
          맥북이 좋긴한데 왜 사이즈가 다른거죠? 이렇게 되면 정말 불편한데 어떻게
          같은 환경에서 작업을 하는거죠?? 제발 알려주세요. 맥북이 좋긴한데 왜
          사이즈가 다른거죠? 이렇게 되면 정말 불편한데 어떻게 같은 환경에서
          작업을 하는거죠?? 제발 알려주세요. 맥북이 좋긴한데 왜 사이즈가
          다른거죠? 이렇게 되면 정말 불편한데 어떻게 같은 환경에서 작업을
          하는거죠?? 제발 알려주세요.
        </div>
      </div>
    </StyledViewPostContentOne>
  );
}

export default ViewPostContentOne
