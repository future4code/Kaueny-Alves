import React, { useEffect, useState } from 'react';import axios from 'axios';
import Trips from '../Trips/Trips'

function ListTripPage() {

  const [ trips, setTrips] = useState([])

  
  useEffect(()=>{
    axios
       .get(
         'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello/trips'
       )
       .then(response => {
        console.log(response.data.trips)
        setTrips(response.data.trips)
       })
       .catch(erro => {
         console.log(erro);
       });
    },[])

  return (
    <div >
       {trips.map(trip=>{
           return<Trips
           trips={trip}
           />
           
         })}
           
        
      
            
    </div>
  );
}

export default ListTripPage;