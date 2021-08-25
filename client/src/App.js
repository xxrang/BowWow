import './App.css';
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Home from './pages/index'
import Login from './pages/Login'
import PostForm from './pages/PostForm'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import Search from './pages/Search'
import ShowService from './pages/ShowService'
import ShowVolunteer from './pages/ShowVolunteer'
import SignUp from './pages/SignUp'
import Volunteer from './pages/Volunteer'


//루트만 짜기
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/login' component={Login}/>
          <Route exact path ='/postform' component={PostForm}/>
          <Route path ='/profile' component={Profile}/>
          <Route exact path ='/profileedit' component={ProfileEdit}/>
          <Route path ='/search' component={Search}/>
          <Route exact path ='/showservice' component={ShowService}/>
          <Route path ='/showvolunteer' component={ShowVolunteer}/>
          <Route exact path ='/signup' component={SignUp}/>
          <Route path ='/volunteer' component={Volunteer}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
