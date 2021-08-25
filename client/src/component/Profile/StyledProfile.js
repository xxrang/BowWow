import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyeldProfile = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  font-size: 16px;
  padding: 0;
  height: 80vh;
  width: 375px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const StyledProfileInfo = styled.div`
  box-sizing: border-box;
  /* border: 1px solid black; */
  width: 375px;
  height: 200px;
  border-bottom: 2px solid #000;

  > .profile-container {
    height: 100px;
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > .profile-img-wrapper > img {
      border-radius: 150px;
      border: 1px solid #fff;
      margin-left: 20px;
      margin-right: 30px;
    }

    > .profile-info-wrapper {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    > .profile-info-wrapper > .profile-info-nickname-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;

      > h3 {
        margin-right: 10px;
      }
    }

    > .profile-info-wrapper p {
      margin-top: -18px;
    }
  }

  > .profile-info-content {
    display: block;
    width: 335px;
    height: 40px;
    text-align: center;
    padding: 0 20px 0 20px;
  }
`;
//프로필 수정버튼
export const ProfileBtnLink = styled(Link)`
  box-sizing: border-box;
  padding: 5px 9px;
  border: 1px solid #000;
  background: transparent;
  color: #000;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledProfileList = styled.div`
  > h2 {
    margin: 15px 0 10px 0;
  }
  > .list-item-scroll {
    box-sizing: border-box;
    padding: 15px 0;
    width: 100%;
    height: 420px;
    /* background: green; */
    overflow: hidden;
    overflow-y: auto;

    /* &::-webkit-scrollbar {
      width: 8px;
      background: gray;
    }

    &::-webkit-scrollbar-thumb {
      height: 10%;
      background: white;
      border-radius: 6px;
    } */
  }

  /* > .list-item-scroll::-webkit-scrollbar {
    display: none;
  } */
`;

export const StyledProfileListItem = styled.div`
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  width: 95%;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  /* border: 2px solid black; */
  //box-shadow
  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  > .list-item-wrapper {
    display: flex;
    margin: 8px 0 12px 0;
    justify-content: space-between;
  }
  //태그
  > .list-item-wrapper h3 {
    margin: 0;
  }

  > p {
    //3가지 말줄임 표
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :hover {
    width: 99%;
    height: 100px;
  }
`;