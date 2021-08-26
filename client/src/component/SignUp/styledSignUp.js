import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSignUp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 375px;
  margin: 20px auto;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  font-family: "Nanum Gothic Coding", monospace;
  /* justify-content: center; */
  /* align-items: center; */
  > form {
    height: 900px;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
  }

  > form .image-container > input {
    display: none;
  }

  > form .image-container img {
    cursor: pointer;
    width: 100px;
  }

  > form label {
    margin: 16px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  > form > input {
    padding: 0;
    margin: 0;
    position: static;
    padding-left: 14px;
    width: 360px;
    height: 40px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    flex: none;
    flex-grow: 0;
    font-size: 16px;
  }

  > form .user-info-content {
    height: 80px;
  }

  > form > .button-wapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  > form button {
    border-radius: 10px;
    white-space: nowrap;
    margin-right: 10px;
    width: 100px;
    height: 48px;

    padding: 10px 30px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5rem;

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
`;

export const BtnLink = styled(Link)`
  box-sizing: border-box;

  background: #fff;
  color: #48cfad;
  border: 2px solid #48cfad;
  border-radius: 10px;
  text-align: center;
  white-space: nowrap;
  padding: 10px 30px;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5rem;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  width: 100px;
  height: 48px;
  text-decoration: none;

  &:hover {
    background: #48cfad;
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const StyledUserImgUpload = styled.div`
  width: 375px;
  height: 180px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  > .image-container {
    width: 375px;
    height: 110px;
    display: flex;
    align-items: flex-start;
  }

  > h3 {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  > div .image-wrapper {
    width: 100px;
    height: 100px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0e2e7;
    border: 1px solid #e0e2e7;
    box-sizing: border-box;
    border-radius: 8px;
    margin-right: 12px;
    order: 0;
    cursor: pointer;
    background-image: url("../../images/add-friend.png");
    margin-left: 10px;
  }

  > div .img-condition p {
    padding-top: 13px;
    color: #48cfad;
    font-size: 12px;
    font-weight: 700;
    line-height: 1rem;
    margin-left: 20px;
    padding-right: 15px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 8px;
`;
