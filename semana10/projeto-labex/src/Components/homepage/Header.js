import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
 
}));



function Header() {
  const history = useHistory();
  const classes = useStyles();

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
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={goCreateTripsPage}>Criar viagens</Button>
            <Button color="inherit" onClick={goTripDetailsPage}>Detalhes das viagens</Button>
            <Button color="inherit" onClick={goToLoginPage}>Login</Button>
          </Toolbar>
        </AppBar>
   </div>
  );
}

export default Header;
