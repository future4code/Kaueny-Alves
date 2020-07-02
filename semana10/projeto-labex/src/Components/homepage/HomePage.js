import React from 'react';
import { Card } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    Width: 300,
    marginLeft: 200,
    marginRight: 200,
    marginBottom: 50,
    marginTop: 50,
    padding: 20,
    textAlign: "center",
  },
  
}));





function HomePage() {
  const history = useHistory()
  const classes = useStyles();


  const goToListTripsPage = ()=>{
    history.push("/ListTripPage")
  }
  
  return (
    <div>
        <Card className={classes.root}>
          <h1 onClick={goToListTripsPage}>Viagens aos Planetas</h1>
          <img 
            src="https://picsum.photos/id/967/500/500" alt="fotos planetas"
          />
         
        </Card>
   </div>
  );
}

export default HomePage;


 