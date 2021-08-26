import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {StyledLogin} from './StyledLogin'
import {Link} from 'react-router-dom'

function Login({modal , loginModalClick}) {
  
  const { register, handleSubmit,formState: {errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  // console.log(watch());
  //console.log("errors:",errors)

  return (
    <StyledLogin>
      <button onClick = {loginModalClick}> Login </button>
      {modal ?
      <div className = 'modal' >
        <div className = 'popup-box'>
          <button className = 'close-btn-x'
          onClick = {loginModalClick}>❌</button>
          <h3>로그인 하시고<br/>더 많은 서비스를 이용하세요.</h3>
          <hr></hr>
          {/*react-hook-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", { required: true })} 
            type="email" />
            {errors.email && (
            <p>없는 이메일 입니다.</p>
            )}
            <input {...register("password", { required: true, minLength: 8 })}
            type="password"/>
            {errors.password && (
            <p>비밀번호가 틀렸습니다.</p>
            )}
            <button className = 'oath-btn'>카카오</button>
            <button className = 'modal-btn' type="submit">Login</button>
            <Link to = '/signup'><button className = 'modal-btn'>Signup</button></Link>
          </form>
        </div>
      </div>
      :
      null}
    </StyledLogin>
  )
}

export default Login


/*

<input type = 'text' placeholder = '아이디'/><br/>
<input type = 'password' placeholder = '패스워드'/><br/>
<button className = 'oath-btn'>카카오</button><br/>
<button className = 'modal-btn close-btn' onClick = {loginModalClick}> Close </button>
*/
