import styled from 'styled-components'

export const StyledViewPost = styled.div`
  margin : 50px 220px;
  display: grid;
  grid-template-columns: 2fr 1fr ;
  /*grid-template-rows: 500px; */
  height: 63vh;
`
export const StyledViewPostContent = styled.div`
margin-right: 20px;
`

export const StyledViewPostComment = styled.div`
/*width : 300px;
height: 500px;*/
/*background: rgb(220, 248, 235);*/
display: flex;
flex-direction: column;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding : 20px;
>.post-comment-form-wrapper{
  width : 100%;
  >i{
    margin-left: 10px;
  }
  >.flex-box{
    display: flex;
    >.post-comment-input-submit{
      width : 50px;
      height : 32px;
      background: #48cfad;
      color : white;
    }
  }
  >.flex-box>form >.post-comment-input,.post-comment-input-submit{
    margin : 10px 5px;
    height : 30px;
    border-radius: 5px;
    border : none;
  }
  .flex-box>form>.post-comment-text{
      width : 200px;
      padding-left: 10px;
      border : 1px solid grey;
  }

  >.post-comment-wrapper{
  width : 100%;
  padding : 0 20px;
}
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
`
