import styled from 'styled-components';

export const StyledPostForm = styled.div`
  box-sizing: border-box;
  padding: 0;
  /* border: 1px solid black; */
  margin: 50px auto;
  padding: 0 300px;

  > form {
    display: flex;
    display: nowrap;
    justify-content: center;
    align-items: center;

    > .form-data {
      width: 50%;
      padding: 5px;
      height: 680px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 15px;
      height: 100%;

      > label {
        margin: 15px 0 6px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      }

      > #title {
        font-size: 20px;
      }
      > input {
        position: static;
        padding-left: 14px;
        width: 360px;
        height: 28px;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        flex: none;
        flex-grow: 0;
        font-size: 16px;
      }

      > #date-picker {
        width: 200px;
        font-size: 16px;
      }

      > .button-wapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 16px;
        width: 360px;

        > button {
          border-radius: 10px;
          white-space: nowrap;
          margin-right: 10px;
          font-size: 19px;
          line-height: 1.3rem;
          padding: 9px 22px;
          width: 80px;
          height: 40px;

          outline: none;
          border: none;
          cursor: pointer;
          text-align: center;
          transition: all 0.5s ease-in-out;

          border: 2px solid #48cfad;
          background: #48cfad;
          color: #fff;
          &:hover {
            background: #fff;
            color: #48cfad;
            border: 2px solid #48cfad;
          }
        }
      }

      > select {
        border: 1px solid #d9d9d9;
        width: 200px;
        height: 35px;
        outline: none;
        padding-left: 14px;
        margin-bottom: 3px;
      }
    }
  }
`;

//UploadImg
export const StyledPostFormUploadImg = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > .img-container {
    /* border: 1px solid gray; */
    width: 350px;
    height: 100%;
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;

    > label > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    > input {
      display: none;
    }

    > .img-wrapper {
      border: 2px solid white;
      width: 280px;
      height: 85%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      > label,
      p {
        margin-top: 180px;
        margin-bottom: 0;
        font-size: 22px;
        font-weight: 700;
        text-align: center;
        line-height: 2.4rem;
        color: #939393;
        cursor: pointer;
      }
      > p {
        margin-top: 140px;
        font-size: 16px;
      }

      > input {
        display: none;
      }
    }
  }
`;

//PostContent


export const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  outline: none;
  width: 360px;
  height: 150px;
  padding: 10px 0 0 14px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
`;