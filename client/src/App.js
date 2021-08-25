import './App.css';
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PostFormPage from './pages/PostFormPage'
import ProfilePage from './pages/ProfilePage'
import ProfileEditPage from './pages/ProfileEditPage'
import SearchPage from './pages/SearchPage'
import ShowServicePage from './pages/ShowServicePage'
import ShowVolunteerPage from './pages/ShowVolunteerPage'
import SignUpPage from './pages/SignUpPage'
import VolunteerPage from './pages/VolunteerPage'


//루트만 짜기
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route path ='/login' component={LoginPage}/>
          <Route path ='/postform' component={PostFormPage}/>
          <Route path ='/profile' component={ProfilePage}/>
          <Route path ='/profileedit' component={ProfileEditPage}/>
          <Route path ='/search' component={SearchPage}/>
          <Route path ='/showservice' component={ShowServicePage}/>
          <Route path ='/showvolunteer' component={ShowVolunteerPage}/>
          <Route path ='/signup' component={SignUpPage}/>
          <Route path ='/volunteer' component={VolunteerPage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
