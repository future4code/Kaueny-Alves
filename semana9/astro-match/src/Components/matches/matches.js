import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'; 
import styled from 'styled-components'

const Img = styled.img`
  margin: auto;
  display: block;
  Width: 300px;
  Height: 300px;
`;


function Matches(props) {
  const [matches, setMatches] = useState([{}])

  useEffect(()=>{
    GetMaches()
  },[])

  const GetMaches = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/matches',
        
      )
      .then(resposta => {
        console.log(resposta.data.matches)
        setMatches(resposta.data.matches);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  return (
    
     <Grid
      container 
      direction="row"
      justify="space-evenly"
      alignItems="center"
      >
        {matches.length === 0 && <div>Carregando...</div>}
        {matches.map(perfil =>{
          
          return(
            <div>
                <Img src={perfil.photo} alt="imagem" />
                <p>{perfil.name}</p> 
            </div>
          
          )
        })}
       
      </Grid>
   
   

  );
}

export default Matches;