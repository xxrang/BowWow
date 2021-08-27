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

//루트만 짜기
function App() {

  //let history = useHistory();
  /*로그인 성공했을때 네브바에 프로필 , 로그아웃 버튼 만들어야해 */
  const [isLogedIn, setIsLogedIn] = useState(initialState.isLogedIn)
  const loginHandler = () => {
    setIsLogedIn((prev)=>!prev);
    //setModal(false);
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route path ='/postform' component={PostFormPage}/>
          <Route path ='/profile' component={ProfilePage}/>
          <Route path ='/profileedit' component={ProfileEditPage}/>
          <Route path ='/search' component={SearchPage}/>
          <Route path = '/viewpost'><ViewPostPage isLogedIn = {isLogedIn}/></Route>
          <Route path ='/showvolunteer' component={ShowVolunteerPage}/>
          <Route path = '/login'><LoginPage isLogedIn = {isLogedIn}loginHandler = {loginHandler}/></Route>
          <Route path ='/signup' component={SignUpPage}/>
          <Route path ='/volunteer' component={VolunteerPage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
