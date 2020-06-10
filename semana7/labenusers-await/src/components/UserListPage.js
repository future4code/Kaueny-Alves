import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const Container = styled.div`
   border: 1px solid black;
   margin: 100px;
   text-align: center;
   min-height: 500px;
`;

const List = styled.ul`
   list-style: none;
`;

const UserList = styled.li`
  display: flex;
  max-width: 100px;
  justify-content: space-between;
  padding: 10px 0;
`;

const Title = styled.h2`
    color: gray;
`

const axiosConfig = {
  headers: {
    Authorization: "kaueny-alves-mello"
  }
};

class UsersListPage extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.fetchUsersList();
  }

   fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  

  handleUserDeletion = userId => {

   if( window.confirm ("Tem certeza de que deseja deletar?")){
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert("Usuário apagado com sucesso!");
        this.fetchUsersList();
      })
      .catch(e => {
        alert("ERRO AO APAGAR USUARIO");
      });
  }}

  render() {
    return (
        <Container>
            <Title>Usuários Cadastrados:</Title>
      <List>
        {this.state.usersList.length === 0 && <div>Carregando...</div>}
        {this.state.usersList.map(user => {
          return (
            <UserList>
              {user.name}
              <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>
                X
              </DeleteButton>
            </UserList>
          );
        })}
      </List>
      </Container>
     
    );
  }
}

export default UsersListPage;
