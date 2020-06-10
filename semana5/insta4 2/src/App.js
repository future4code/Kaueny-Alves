import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Kau from '../src/img/kaueny.png'
import Ka from '../src/img/kaueny1.png'
import Marley from '../src/img/marley.png'
import Ma from '../src/img/marley1.png'

class App extends React.Component {

  state = {

    Post: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },
  
      {
        nomeUsuario: 'Kau',
        fotoUsuario: Kau,
        fotoPost: Ka,
      },
  
      {
        nomeUsuario: "Marley",
        fotoUsuario: Ma,
        fotoPost: Marley,
      },
    ],

    valorInputNomeUsuario:" ", 
    valorInputFotoUsuario:" ",
    valorInputFotoPost:" ",

  };

    adicionaPost = () => {

      const novoPost = {

        nome: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost,

    }

      const novosPosts = {...this.state.Post, novoPost};

        this.setState({

          Post: novosPosts,
          valorInputNomeUsuario: " ",
          valorInputFotoUsuario: " ",
          valorInputFotoPost: " ",

    });

   


  }

  render() {

    const listaDePosts = this.state.Post.map (post => {
      return (
          <Post 
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
          />
      )
    })

    return (
      <div className={'app-container'}>
        <div>
        <input 
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome Usuário"}
        />

        <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuari}
          placeholder={"Url Foto Usuário"}
        />

        <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Url Foto Post"}
        />

        <button onClick={this.novosPosts}>Adicionar</button>
        </div>

        <div>{listaDePosts}</div>
       
      </div>
    );
  }
}

    



export default App;

