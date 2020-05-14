import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Kau from '../src/img/kaueny.png'
import Ka from '../src/img/kaueny1.png'
import Marley from '../src/img/marley.png'
import Ma from '../src/img/marley1.png'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Kau'}
          fotoUsuario={Kau}
          fotoPost={Ka}
        />

        <Post
          nomeUsuario={"Marley"}
          fotoUsuario={Ma}
          fotoPost={Marley}
        />

      </div>
    );
  }
}

export default App;
