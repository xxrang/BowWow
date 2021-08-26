import React from 'react'
import {StyledViewPostContent} from './StyledViewPost'
import ViewPostProfile from './ViewPostProfile'
import ViewPostContentOne from "./ViewPostContentOne";

function ViewPostContent() {
  return (
    <StyledViewPostContent>
      <ViewPostProfile />
      <ViewPostContentOne />
    </StyledViewPostContent>
  )
}

export default ViewPostContent
