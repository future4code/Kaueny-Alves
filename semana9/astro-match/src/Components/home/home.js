import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';

import styled from 'styled-components'

const Img = styled.img`
  margin: auto;
  display: block;
  Width: 300px;
  Height: 300px;
`;

function Home() {

  const [perfil, setPerfil] = useState({})

    

  useEffect(()=>{
    GetProfile()
  },[])

  

  const GetProfile = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/person',
        
      )
      .then(response => {
       console.log(response.data.profile)
        setPerfil(response.data.profile);
      })
      .catch(erro => {
        console.log(erro);
      });

  };

  

  const ChoosePerson = (id) => {
   axios
   .post(
     'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/choose-person',{
       id:id,
       choise: true,
     }
     
   )
   .then(resposta => {
     console.log(resposta.data)
    
   })
   .catch(erro => {
     console.log(erro);
   })

  };

  return (
    
      <Card>
        
        <Img src={perfil.photo} alt="imagem" />
        
        <Typography gutterBottom variant="h5" component="h2">{perfil.name}</Typography> 
        <Typography variant="body1" color="" component="p"> {perfil.age} anos </Typography> 
        <Typography variant="body2" color="" component="p"> {perfil.bio}</Typography>
       
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
         >
          <FavoriteIcon onClick={GetProfile} size="large"/ >
          
          <CancelIcon onClick={() => ChoosePerson(perfil.id)} size="large"/ >
          </Grid>
        </Card>
        
  );
}

export default Home;
