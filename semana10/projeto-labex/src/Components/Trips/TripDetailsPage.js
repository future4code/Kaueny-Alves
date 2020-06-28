import React,{useState,useEffect} from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from '@material-ui/core';



const TripsDetails = styled(Card)`
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-around;
padding: 30px;
margin: 30px;
width: 500px;
height: 500px;

`;

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello'
const token = window.localStorage.getItem('token')

function TripDetailsPage(props) {
  useProtectedPage()
  const [trip, setTrip] = useState()

  useEffect(()=>{
    axios
       .get(
         `${baseUrl}/trip/${props.id}`,
         {
          headers: {auth: token,}
        }
       )
       .then(response => {
        console.log(response.data.trip)
        setTrip()
       })
       .catch(erro => {
         console.log(erro);
       });
    },[props.id])

  return (
        <TripsDetails>
           {trip}     
          <button > Aprovar</button>
          <button > Recusar</button>
              
        </TripsDetails>
    
  );
}

export default TripDetailsPage;