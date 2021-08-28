import './App.css';
import React , {useState} from 'react'
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import PostFormPage from './pages/PostFormPage'
import ProfilePage from './pages/ProfilePage'
import ProfileEditPage from './pages/ProfileEditPage'
import SearchPage from './pages/SearchPage'
import ViewPostPage from './pages/ViewPostPage'
import ShowVolunteerPage from './pages/ShowVolunteerPage'
import SignUpPage from './pages/SignUpPage'
import VolunteerPage from './pages/VolunteerPage'
import LoginPage from './pages/LoginPage'
import {initialState} from './component/dummyData'
//import axios from 'axios';

//루트만 짜기
function App() {

  /*로그인 성공했을때 네브바에 프로필 , 로그아웃 버튼 만들어야해 */
  const [isLogedIn, setIsLogedIn] = useState(initialState.isLogedIn)
  const loginHandler = (data) => {
    setIsLogedIn(true);
    //setModal(false);
    /*console.log(data)  
    axios.post('https://localhost:4000/user/login',
    data,{
    withCredentials : true
    }
    .then((res)=> {
    if(res.data.accessToken){
      localStorage.setItem('user',JSON.stringify(res,data))
    }
  })*/

  let accessToken = '숙영'
  localStorage.setItem('user',accessToken)
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'><HomePage isLogedIn = {isLogedIn}/></Route>
          <Route path ='/postform'><PostFormPage isLogedIn = {isLogedIn}/></Route>
          <Route path ='/profile'><ProfilePage isLogedIn = {isLogedIn}/></Route>
          <Route path ='/profileedit' component={ProfileEditPage}/>
          <Route path ='/search' component={SearchPage}/>
          <Route path = '/viewpost'><ViewPostPage isLogedIn = {isLogedIn}/></Route>
          <Route path ='/showvolunteer' component={ShowVolunteerPage}/>
          <Route path = '/login'><LoginPage isLogedIn = {isLogedIn}loginHandler = {loginHandler}/></Route>
          <Route path ='/signup' component={SignUpPage}/>
          <Route path ='/volunteer'><VolunteerPage isLogedIn = {isLogedIn}/></Route> {/*뷰포스트페이지로 이동해서 필요없을듯.*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
