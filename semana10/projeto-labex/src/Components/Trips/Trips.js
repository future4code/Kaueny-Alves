import React from 'react';
 import styled from 'styled-components';

 const ListItemContainer = styled.div`
     display: flex;
     flex-direction:column;
     align-items: center;
     padding: 10px;

 `;

 function Trips (props) {
     const trips = props.trips

     return(
     <ListItemContainer>
      
      <p>NAME: {trips.name}</p>
      <p>DESCRIPTION: {trips.description}</p>
      <p>PLANET: {trips.planet}</p>
      <p>DURATION: {trips.durationInDays}</p>
      <p>DATE: {trips.date}</p>

     </ListItemContainer>)
 }

 export default Trips; 