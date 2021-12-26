import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login'
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Allpatient from './components/Allpatient/Allpatient/Allpatient';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const ContextUser = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ContextUser.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/dashboard/allpatients">
            <Allpatient></Allpatient>
          </Route>
          <Route path="/dashboard/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </ContextUser.Provider>
  );
}

export default App;
