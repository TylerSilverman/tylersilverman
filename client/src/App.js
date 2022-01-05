import React, { Component, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Store } from './store';

import './App.css';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import Notes from './components/pages/Notes';
import Directory from './components/pages/Directory';
import Application from './components/pages/Application';
import Admin from './components/pages/Admin';
import Email from './components/pages/Email';
import Search from './components/pages/Search';
import HelpDesk from './components/pages/HelpDesk';
import Calendar from './components/pages/Calendar';


import API from "./utils/API";


const App = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [ dispatch ]);

 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/notes" component={Notes} />
          <PrivateRoute exact path="/application" component={Application} />            
          <PrivateRoute exact path="/directory" component={Directory} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/email" component={Email} />
          <PrivateRoute exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/helpDesk" component={HelpDesk} />
          
          <PrivateRoute exact path="/search" component={Search} />
          
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
