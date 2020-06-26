import React from 'react';
import {useHistory} from 'react-router-dom'



function HomePage() {

  const history = useHistory()

  const goToListTripsPage = ()=>{
    history.push("/ListTripPage")
  }

  const goToLoginPage = ()=>{
    history.push("/LoginPage")
  }

  const goCreateTripsPage = ()=>{
    history.push("/CreateTripPage")
  }

  const goTripDetailsPage = ()=>{
    history.push("/TripDetailsPage")
  }

  
  return (
    <div >
      <button onClick={goToListTripsPage}>ListTripPage</button>
      <button onClick={goToLoginPage}>LoginPage</button>
      <button onClick={goCreateTripsPage}>CreateTripsPage</button>
      <button onClick={goTripDetailsPage}>TripDetailsPage</button>
    </div>
  );
}

export default HomePage;
