import styled from 'styled-components'

export const StyledViewPost = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  display: grid;
  height: 63vh;
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
/*width : 300px;
height: 500px;*/
/*background: rgb(220, 248, 235);*/
display: flex;
flex-direction: column;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding : 20px;
margin-left : 14px;
>.post-comment-form-wrapper{
  width : 100%;
  >i{
    margin-left: 10px;
  }
  >.flex-box{
    display: flex;
    align-items: center;
    >.post-comment-text-submit{
      width : 50px;
      height : 55px;
      background: #48cfad;
      color : white;
      &:hover{
        background: #fff;
        border: 1px solid #48cfad;
        color : #48cfad;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  >.flex-box>form >.post-comment-text,.post-comment-text-submit{
    margin : 0 5px;
    border-radius: 5px;
    border : none;
  }
  .flex-box>form>.post-comment-text{
      width : 200px;
      padding: 10px;
      height : 40px;
      margin-top:10px;
      border : none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
      /*box-shadow: rgb(0, 0, 0, 0.35) 1px 1px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;*/
  }
  >.post-comment-wrapper{
  width : 100%;
  padding : 0 20px;
}
> .list-item-scroll {
    box-sizing: border-box;
    padding: 15px 0;
    width: 100%;
    height: 420px;
    /* background: green; */
    overflow: hidden;
    overflow-y: auto;
    
>.post-comment-wrapper>.post-comment-profile-wrapper{
  display: flex;
  align-items: center;
  width : 88%;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
  >h4{
      margin-bottom: 12px;
    }
  >.profile-img{
    width : 50px;height: 50px;
    border-radius: 50%;
    margin : 0 10px;
  }
}
>.post-comment-wrapper{
    margin: 10px;
    padding : 0;
    >ul{
      padding : 0;
      list-style: none;
      >li{
        margin-top : 10px;
        padding : 10px;
      }
    }
  }
}
}
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