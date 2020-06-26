import React from 'react';
import {  Card } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import Header from './Header';



function HomePage() {
  const history = useHistory()

  const goToListTripsPage = ()=>{
    history.push("/ListTripPage")
  }
  
  return (
    <div>
        <Header/>
        <Card >
          <h1>Viagens aos Planetas</h1>
          <img 
            src="https://picsum.photos/500/500" alt="fotos planetas"
            onClick={goToListTripsPage}
          />
         
        </Card>
   </div>
  );
}

export default HomePage;


 