import React from 'react';
import axios from "axios"
import styled from "styled-components"
import './App.css';


const Container = styled.div `
  max-width: 200px;
  margin: 30px ;
  border: 1px solid black;
  padding: 30px;
  
`
const Lista = styled.ul `
 list-style: none;
`
const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;



class App extends React.Component {

  state= {
    usuario:[],
    nomeDigitado:"",
    emailDigitado:"",
    criaUsuario: true,
  }

  componentDidMount = () =>{
    this.pegaUsuario()
  };

  pegaUsuario = ()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization:"kaueny-alves-mello"
      }
    }
      ).then(resposta => {
        this.setState({usuario: resposta.data})
        console.log(resposta)
        
      }).catch(erro =>{
        console.log(erro)
      })
  }

  criarUsuario = ()=> {
    const body = {
      name: this.state.nomeDigitado,
      email: this.state.emailDigitado,
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,{
      headers: {
        Authorization: "kaueny-alves-mello"
      }
    }).then(response =>{
      console.log(response);
      this.setState({ nomeDigitado: "", emailDigitado: "" });
      alert( "Cadastro criado com sucesso")
      
    }).catch(erro =>{
      console.log(erro);
      alert( "Erro ao criar cadastro")
    })

  }

  onChangeInputNome = event =>{
    this.setState({nomeDigitado: event.target.value})
  }

  onChangeInputEmail = event =>{
    this.setState({emailDigitado: event.target.value})
  }

  onClickListaRegistro = ()=> {
    this.setState({criaUsuario: !this.state.criaUsuario})
  }
  
  
  

  render(){
      if(this.state.criaUsuario){
  return (
    
    <>
        <button 
          onClick={this.onClickListaRegistro}
          >Ir para pagina de Lista</button>
      
        <Container>
          <h3>Nome:</h3>
          <input 
            value={this.state.nomeDigitado}
            onChange={this.onChangeInputNome}
          />

          <h3>Email:</h3>
          <input 
            value={this.state.emailDigitado}
            onChange={this.onChangeInputEmail}
          /> <br/> <br/>

          <button
            onClick={this.criarUsuario}
          >Salvar</button>
          
        </Container>

    </>
  )}
 else {
  return (
    <>
    <button onClick={this.onClickListaRegistro}>Ir para pagina de registro</button>
    <Container>
    <h2>Usuários Cadastrados:</h2>
    <Lista>
      {this.state.usuario.map(usuario=>{
        return <li key={usuario.id}>{usuario.name} 
         <DeleteButton onClick={() => this.onDeleteUser(usuario.id)}>
              X
            </DeleteButton>
            <hr />
        </li>
    })}
   
    </Lista>
    </Container>
    </>
  )
}
}
}
export default App;
