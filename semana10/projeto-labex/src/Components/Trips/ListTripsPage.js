import React, { useEffect, useState } from 'react';import axios from 'axios';
import Trips from '../Trips/Trips'
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import Header from '../homepage/Header';
import {useHistory} from 'react-router-dom'


 const ListItemContainer = styled.div`
     display: flex;
     flex-direction:column;
     align-items: center;
     padding: 10px;
     border: 1px solid black;
     border-radius:1px;
     margin: 30px;

 `;

function ListTripPage() {

  const [ trips, setTrips] = useState([])
  const history = useHistory()

  const goToAplicationForm = ()=>{
    history.push("/AplicationForm")
  }
  
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
    <Card >
      <Header/>
       {trips.map(trip=>{
           return<ListItemContainer>
           <img src="https://picsum.photos/100/100" alt="fotos planetas"/>
           <Trips
                    trips={trip}
                 />
                 <button onClick={goToAplicationForm}> Inscreva-se aqui</button>
                 </ListItemContainer>
         })}
           
    </Card>
  );
}

export default ListTripPage;