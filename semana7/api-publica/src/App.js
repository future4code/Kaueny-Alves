import React from 'react';
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 50px;
    padding: 15px;
  `


class App extends React.Component {

  state = {
    pokemons: [],
    pokeImage: "",
    pokePoder:[],
  }

  componentDidMount = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=50")
    .then(resposta => {
      this.setState({pokemons: resposta.data.results})
    }).catch(erro=> {
      console.log(erro)
    })
  }

  pegaPokemon = event => {
    const pokeName = event.target.value;
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(resposta => {
      this.setState({pokeImage: resposta.data.sprites.front_default})
    })
    .catch(erro => {
      console.log(erro)
    })

    axios
    .get(`https://pokeapi.co/api/v2/ability/${pokeName}`)
    .then(resposta => {
      this.setState({pokePoder: resposta.data})
      console.log(resposta.data.data.abilities);
    })
    .catch(erro => {
      console.log(erro)
    })
    
  }

  render(){
    
    const image = this.state.pokeImage ? (<img src={this.state.pokeImage} alt="pokemon" />) : (<div />)

  return (
    <Container >
      <h2>Escolha seu Pokemon e descubra a sua habilidade</h2>
      <select onChange={this.pegaPokemon}>
        <option value= ""/>
          {this.state.pokemons.map(pokemon => {
            return <option value={pokemon.name}>{pokemon.name}
        </option>
          })}
      </select>
      <div>
        {image} 
      </div>
    </Container>
  );
}
}

export default App;
