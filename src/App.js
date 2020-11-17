import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import './style.css';

export const userContext = React.createContext();

function App() {
  if (sessionStorage.getItem('user') === null) sessionStorage.setItem('user', JSON.stringify({}));
  if (sessionStorage.getItem('services') === null) sessionStorage.setItem('services', JSON.stringify([]));

  const [loggedinUser, setLoggedinUser] = React.useState(JSON.parse(sessionStorage.user));
  const [services, setServices] = React.useState(JSON.parse(sessionStorage.services));

  return (
    <userContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
