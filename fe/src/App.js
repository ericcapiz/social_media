import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Profile from './components/pages/profile/Profile';




function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/profile/:username">
        <Profile />
      </Route>
    
    </Switch>
  );
}

export default App;
