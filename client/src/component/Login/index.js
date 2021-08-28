import React from 'react'
import { useForm } from 'react-hook-form';
import {StyledLogin} from './StyledLogin'
import { Link, useHistory} from 'react-router-dom'
// import axios from 'axios';
//import { initialState } from '../dummyData'

function Login({ setHasAccessToken, hasAccessToken, loginHandler }) {
  let history = useHistory();
  // const [signinSucc, setSigninSucc] = useState(true);
  //formData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // axios.post('http://localhost:4000/user/signin', data, {
    //   withCredentials: true
    // }).then((res) => {
    //   console.log(res.data)
    //   return res.data.accessToken
    // }).then((data) => {
    //   setHasAccessToken(data);
    //   return data;
    // }).then((accessToken) => {
    //   loginHandler(accessToken);
      // window.localStorage.setItem("accessToken", accessToken);
    //   window.history.go(-1);
    // }).catch((err) => {
    //   console.log(err)
    //   setSigninSucc(false);
    // })
    console.log("data:", data);
    const accessToken = 8;
    setHasAccessToken(accessToken);
    loginHandler(accessToken);
    window.localStorage.setItem("accessToken", accessToken);
    history.push("/");
  };

  return (
    <StyledLogin>
      <div className="login-wrapper">
        <h3>
          로그인 하시고
          <br />더 많은 서비스를 이용하세요.
        </h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="example@email.com"
            type="email"
          />
          {errors.email && <p>정확한 이메일주소를 입력하세요.</p>}
          <input
            {...register("password", { required: true, minLength: 8 })}
            placeholder="password"
            type="password"
          />
          {errors.password && <p>정확한 비밀번호를 작성해주세요.</p>}
          <button className="oath-btn">카카오</button>

          <button className="modal-btn" type="submit">
            로그인
          </button>
          <Link to="/signup">
            <button className="modal-btn">아직 회원이 아니신가요?</button>
          </Link>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;