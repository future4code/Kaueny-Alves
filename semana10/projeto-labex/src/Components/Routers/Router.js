import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import CreateTripPage from '../Trips/CreateTripPage';
import LoginPage from '../homepage/LoginPage';
import ListTripPage from '../Trips/ListTripsPage';
import TripDetailsPage from '../Trips/TripDetailsPage';
import AplicationForm from '../Trips/AplicationForm';
import Header from '../homepage/Header';
import { Footer } from '../homepage/Footer';
  

function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/CreateTripPage">
          <CreateTripPage/>
        </Route>
        <Route  path="/LoginPage">
          <LoginPage/>
        </Route>
        <Route path="/ListTripPage">
          <ListTripPage/>
        </Route>
        <Route  path="/TripDetailsPage">
          <TripDetailsPage/>
        </Route>
        <Route  path="/AplicationForm">
          <AplicationForm/>
        </Route>
        <Route path="/">
          <div>Opa! 404!</div>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;
