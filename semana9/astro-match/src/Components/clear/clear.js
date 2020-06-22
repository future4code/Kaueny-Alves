import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ButtonClear = styled.button`

  margin: auto,

`



function Clear(props) {


  const clearMaches = () => {
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kaueny/clear',
        
      )
      .then(resposta => {
        console.log(resposta.data)
        
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  return (
    
     <div>

        <button onClick={clearMaches} >Clear Matches</button>
   
     </div>
  
  

 );

}

export default Clear;