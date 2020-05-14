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
    ]
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
       {listaDePosts}

      </div>
    );
  }
}

export default App;

