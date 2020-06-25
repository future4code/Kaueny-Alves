import React from 'react';
import CreateTripPage from '../src/Components/CreateTripPage'
import HomePage from '../src/Components/HomePage'
import TripDetailsPage from '../src/Components/TripDetailsPage'
import Router from '../src/Components/Router'


function App() {
  return (
    <div >
      <CreateTripPage />
      <HomePage />
      <TripDetailsPage />
      
    </div>
  );
}

export default App;
