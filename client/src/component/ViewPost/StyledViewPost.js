import styled from 'styled-components'

export const StyledViewPost = styled.div`
  box-sizing: border-box;
  margin: 50px 220px;
  display: grid;
  height: 65vh;
  width: 70%;
  grid-template-columns: 2fr 1fr;
`;
export const StyledViewPostContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledViewPostComment = styled.div`

`


export const StyledViewPostProfile = styled.div`
  box-sizing: border-box;
  /* border: 1px solid black; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;

  > .profile-container {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    >.profile-img-wrapper {
      padding: 15px;
    }
    > .profile-img-wrapper img {
      
      border-radius: 150px;
      border: 1px solid #fff;
      margin-right: 15px;
    }

    > .profile-info-wrapper {
      width: 350px;
      height: 100px;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: auto;

      > h2 {
        margin: 12px 0 0 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      > p {
        margin: 0;
      }
    }
    > p {
      width: 120px;
      margin-right: 10px;
      padding: 5px;
    }
  }
`;

export const StyledViewPostContentOne = styled.div`
  /* box-sizing: border-box; */
  width: 100%;
  height: 475px;

  > .img-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 260px;
    /* border: 1px solid black; */
    margin-bottom: 30px;
    > img {
      width: 400px;
      height: 260px;
      object-fit: contain;
    }
  }

  > .post-info-all {
    margin: 0 auto;
    width: 550px;
    padding: 0px 20px;
    font-style: normal;

    font-size: 17px;
    line-height: 20px;

    > .post-info-two {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 8px;
    
    >.post-info-date {
      margin-left: 10px;
    }
    >.post-info-location {
      margin-left: 140px;
      }
    }

    > .post-info-mobile {
      margin-left: 435px;
      margin-bottom: 12px;
    }

    > .post-info-content {
      font-size: 16px;
      text-align: start;

    }
  }
`;