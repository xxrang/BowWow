import React from 'react'
import {Link} from 'react-router-dom'
import {StyledNeedLogin} from './StyledNeedLogin'


//로그인이 필요합니다는 댓글창 
function NeedLogin({openModal,closeModal}) {
  
  return (
    <>
    {openModal ? <StyledNeedLogin>
      <div className = 'modal' >
        <div className = 'popup-box'>
          <button className = 'close-btn-x' onClick = {closeModal}
          >❌</button>
          <h1>로그인이 필요합니다.</h1>
          <hr></hr>
          <Link to = '/signup'><button className = 'modal-btn'>아직 회원이 아니신가요?</button></Link>
        </div>
      </div>
    </StyledNeedLogin> :
    null
  }
  </>
  )
}

export default NeedLogin
