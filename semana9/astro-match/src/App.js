import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Components/home/home';
import Matches from './Components/matches/matches';
import Clear from './Components/clear/clear';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign:"center",
    display:"block",
    margin:" auto",
    marginTop: 50,
  },
  media:{
    padding:30,

  }
  
});

function App() {
  const classes = useStyles()
 
  const [currentPage, setCurrentPage] = useState("Home")
  
  const changePage=()=>{
    if(currentPage === "Home" ){
    setCurrentPage("Mathes")
  } else {
    setCurrentPage("Home")
  }
}

  

  return (
    <>
    <Card className={classes.root}>
      <PeopleIcon onClick={changePage} >trocar de tela</PeopleIcon>
      {currentPage === "Home" ?  <Home></Home> : <Matches></Matches> }
     
   </Card>
   <Clear></Clear>
   </>
  );
}

export default App;


