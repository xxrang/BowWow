import React from 'react'
import { StyledProfileList, StyledProfileListItem } from "./StyledProfile";

const ProfileList = ({ userPosts }) => {

  console.log("프로파일 리스트:", userPosts)
  // if (userPosts.length === 0) return null;
  if (userPosts.length === 0) return null;
  
  return (
    <StyledProfileList>
      <h2>내 글 목록</h2>
      <div className="list-item-scroll">
        {userPosts &&
          userPosts.map((post) => {
            return (
              <StyledProfileListItem key={post.id}>
                <div className="list-item-wrapper">
                  <h4>{post.title}</h4>
                  <div>{post.updatedAt.split('T')[0]}</div>
                </div>
                <p>{post.content}</p>
              </StyledProfileListItem>
            );
          })}
      </div>
    </StyledProfileList>
  );
};

export default ProfileList
