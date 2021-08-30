import React from "react";
import styled from 'styled-components';
import loadingImg from '../images/loadingPaw.gif'

export const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <StyledLoading>
      <img src={loadingImg} alt="loading-gif" />
      Loading . . .
    </StyledLoading>
  );
}

export default Loading;
