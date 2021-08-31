import styled from 'styled-components'

export const StyledViewPost = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  display: grid;
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
background-color: #f9f9f9;
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
    margin-top : 12px;
    >.post-comment-text-submit{
      width : 50px;
      height : 60px;
      background: #48cfad;
      color : white;
      border : none;
      &:hover{
        background: #fff;
        border: 1px solid #48cfad;
        color : #48cfad;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  >.flex-box >.post-comment-text,.post-comment-text-submit{
    margin : 0 5px;
    border-radius: 5px;
  }
  >.flex-box >.post-comment-text{
      resize: none;
      width : 200px;
      padding: 10px;
      height: 40px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
      box-shadow: rgb(0, 0, 0, 0.35) 1px 1px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
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
    >.post-comment-wrapper{
      list-style: none;
      padding: 0;
      >.post-comment-list{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: #fff;
        border-radius: 5px;
        margin : 5px;
        padding : 5px;
        >.post-commnet-flexbox{
          display: flex;
          justify-content: space-around;
          >.profile-img{
            width : 40px; height : 40px;
            border : 1px solid grey;
            border-radius: 50%;
            margin : 10px;
          }
          >div{
            flex: 2;
          }
          >div>.post-comment-nickname{
            margin-bottom: 0;
            font-weight: 800;
          }
          >div>.post-comment-date{
            font-size : 12px;
            color : grey;
            margin-top: 2px;
          }
          >.remove-button{
            height : 30px;
            border : none;
            background-color: #fff;
            color : #48cfad;
            border : 1px solid #48cfad;
            font-size: 12px;

            border-radius: 5px;
            white-space: nowrap;
            font-weight: 400;
            padding: 5px 12px;
            &:hover{
              transition: all 0.4s ease-in-out;
              background-color: #48cfad;
              color : #fff;
            }
          }
        }
          >.post-comment-content{
            padding : 15px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
      }
    }
  }  
}
`;


export const StyledViewPostProfile = styled.div`
  
  > .profile-container {
    box-sizing: border-box;
    width: 100%;
    height : 80px;
    padding: 0 30px;
    margin : 15px 0 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 2 1;

    > .profile-img-wrapper {
    }
    > .profile-img-wrapper img {
      border-radius: 50%;
      border: 1px solid #fff;
      margin-right: 10px;
    }

    > .profile-info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: auto;

      > h2 {
        margin: 0;
        padding-top: 5px;
      }
      > p {
        margin: 5px 0 0 0;
        font-weight : 700;
        font-size: 18px;
        >span{
          font-size: 12px;
          color :grey;
          margin-left : 3px;
          font-weight : 400;
        }
      }
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
    padding: 0px 40px;
    font-style: normal;

    font-size: 17px;
    line-height: 20px;

    > .post-info-two {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      > .post-info-date {
      }
      > .post-info-location {
      }
    }

    > .post-info-mobile {
      text-align: right;
      margin-bottom: 12px;
    }

    > .post-info-content {
      font-size: 16px;
      text-align: start;
      border-radius : 2px;
      padding : 10px;
      box-shadow : inset 1px 3px 3px 1px rgba(0, 0, 0, 0.1);

    }
  }
`;

export const ProfileInfoBtn = styled.div`
  align-self:center;
  margin-top: -30px;
  >a,button {
    box-sizing: border-box;
    background: #fff;
    color: #48cfad;
    border: 1px solid #48cfad;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
    padding: 5px 12px;
    outline: none;
    text-decoration: none;
    margin : -15px 5px;
    &:hover{
      background-color: #48cfad;
      color :#fff;
      transition: all 0.4s ease-in-out;
    }
  }
`;
