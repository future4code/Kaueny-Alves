import React from 'react';
import axios from "axios";
import styled from "styled-components"



const criaPlaylist = playListName => {
    const body = {
      name: playListName
    }
  
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
    {
      headers: {
          authorization: "kaueny-alves-mello" }
    }
    )
    .then(response => {
      console.log(response)
    })
    .catch(erro => {
      console.log(erro)
    })
  }

class CriaPlayList extends React.Component {


  render (){
  return (
    <div>
      <input
        type="text"
        
      />
      <button>Salvar Playlist</button>
    </div>
  )}
}

export default CriaPlayList;