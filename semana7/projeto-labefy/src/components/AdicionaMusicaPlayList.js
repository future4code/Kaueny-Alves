import React from 'react';
import axios from "axios";



class AdicionaMusicaPlayList extends React.Component {

    state ={
        list: [],
        musicaDigitada:"",
        artistaDigitado:"",
        urlDigitada:"",
    }

    criaMusica = () => {
        const body = {
          name: this.state.musicaDigitada,
          artist: this.state.artistaDigitado,
          url: this.state.urlDigitada,
        }
        
        axios
        .post(`https://us-central1-https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/a93d83c6-c292-4234-8d69-f5d63c43f77b/tracks`, body,
        {
          headers: {
              authorization: "kaueny-alves-mello" }
        }
        )
        .then(response => {
          console.log(response.data)
          alert(`Musica Criada com Sucesso`)
        
        })
        .catch(erro => {
          console.log(erro)
          alert("ERRO ao criar Musica")
        })
     
    }

    onChangeMusica = event => {
        console.log(this.musicaDigitada)
        this.setState({ musicaDigitada: event.target.value})
    }

    onChangeArtista = event => {
        this.setState({ artistaDigitado: event.target.value})
    }

    onChangeUrl = event => {
        this.setState({ urlDigitada: event.target.value})
    }


    render (){
        return(
            <div>

            <input
              type="text"
              placeholder="musica"
              onChange={this.onChangeMusica}
            />
             <input
              value={this.state.artistaDigitado}
              type="text"
              placeholder="artista"
              onChange={this.onChangeArtista}
            />
             <input
              value={this.state.urlDigitada}
              type="url"
              placeholder="url"
              onChange={this.onChangeUrl}
            />
            <button onClick= {()=> this.criaMusica()}>Criar Musica</button>
           
          </div>
          
         ) }}

export default AdicionaMusicaPlayList;
