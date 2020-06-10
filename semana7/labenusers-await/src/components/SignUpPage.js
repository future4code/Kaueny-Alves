import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
   border: 1px solid black;
   margin: 100px;
   padding: 20px;
   max-height: 300px;
   max-width: 200px;
   color: gray;
  
`;

const Button = styled.button`
  margin: 0 auto;
  background-color: hsl(296, 62%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;

  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;

class SignUpPage extends React.Component{

    state = {
        name: "",
        email: "",
    }

    handleNameChange = event => {
        this.setState({name: event.target.value})
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value})
    }

    handleCreateUser = ()=> {
        const axiosConfig = {
            headers: {
              Authorization: "kaueny-alves-mello"
            }
          };

        const body = {
            name: this.state.name,
            email: this.state.email,
        }

        axios
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            axiosConfig
      )
       .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
       .catch(e => {
        alert("Erro ao criar o usuário");
      });
  };
        

    render(){
        return(
            <Container>
                <h3>Nome:</h3>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <h3>Email:</h3>
                <input 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <br />
                <br />
                <Button onClick={this.handleCreateUser}>Criar Usuário</Button>

            </Container>
        )
    
}
}
export default SignUpPage;