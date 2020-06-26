import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import CreateTripPage from '../ProtectedPages/CreateTripPage';
import LoginPage from '../homepage/LoginPage';
import ListTripPage from '../Trips/ListTripsPage';
import TripDetailsPage from '../ProtectedPages/TripDetailsPage';
import AplicationForm from '../Trips/AplicationForm';
  

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/CreateTripPage">
          <CreateTripPage/>
        </Route>
        <Route exact path="/LoginPage">
          <LoginPage/>
        </Route>
        <Route exact path="/ListTripPage">
          <ListTripPage/>
        </Route>
        <Route exact path="/TripDetailsPage">
          <TripDetailsPage/>
        </Route>
        <Route exact path="/AplicationForm">
          <AplicationForm/>
        </Route>
        <Route path="/">
          <div>Opa! 404!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
