import React from 'react';
import styled from 'styled-components';
import Typography  from '@material-ui/core/Typography'


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
      
      <Typography><strong>Name:</strong> {trips.name}</Typography>
      <Typography><strong>Description:</strong> {trips.description}</Typography>
      <Typography><strong>Planet:</strong> {trips.planet}</Typography>
      <Typography><strong>Duration: </strong>{trips.durationInDays}</Typography>
      <Typography><strong>Date: </strong>{trips.date}</Typography>

     </ListItemContainer>)
 }

 export default Trips; 