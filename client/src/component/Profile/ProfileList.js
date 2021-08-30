import React from 'react'
import { StyledProfileList, StyledProfileListItem } from "./StyledProfile";

const ProfileList = ({ userPosts }) => {
  return (
    <StyledProfileList>
      <h2>내 글 목록</h2>
      <div className="list-item-scroll">
          {userPosts.map((post) => {
            return (
              <StyledProfileListItem key={post.id}>
                <div className="list-item-wrapper">
                  <h3>{post.title}</h3>
                  <div>{post.updateAt}</div>
                </div>
                <p>{ post.content}</p>
              </StyledProfileListItem>
            );
          })}
      </div>
    </StyledProfileList>
  );
};

export default ProfileList
