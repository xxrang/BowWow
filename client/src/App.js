import './App.css';
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import Home from './pages/index'
import Login from './pages/Login'
import PostForm from './pages/PostForm'
import ProfilePage from './pages/ProfilePage'
import ProfileEdit from './pages/ProfileEdit'
import Search from './pages/Search'
import ShowService from './pages/ShowService'
import ShowVolunteerPage from "./pages/ShowVolunteerPage";
import SignUpPage from "./pages/SignUpPage";
import VolunteerPage from './pages/VolunteerPage'


//루트만 짜기
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/postform" component={PostForm} />
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/profileedit" component={ProfileEdit} />
          <Route path="/search" component={Search} />
          <Route exact path="/showservice" component={ShowService} />
          <Route path="/showvolunteer" component={ShowVolunteerPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route path="/volunteer" component={VolunteerPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
