import React from "react";
import axios from "axios";



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
            <div>
                <input 
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input 
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button onClick={this.handleCreateUser}>Criar Usuário</button>

            </div>
        )
    
}
}
export default SignUpPage;