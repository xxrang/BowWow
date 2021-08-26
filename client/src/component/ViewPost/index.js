import React from 'react'
import {StyledViewPost} from './StyledViewPost'
import ViewPostContent from './ViewPostContent'
import ViewPostComment from './ViewPostComment'

function ViewPost() {
  return (
    <StyledViewPost>
      <ViewPostContent/>
      <ViewPostComment/>
    </StyledViewPost>
  )
}

export default ViewPost
