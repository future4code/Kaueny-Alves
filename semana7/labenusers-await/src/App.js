import React from 'react';
import SignUpPage from './components/SignUpPage';
import UserListPage from './components/UserListPage';
import styled from "styled-components";

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
  padding: 0.2em 0.5em;
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

class App extends React.Component {

  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "usersList" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };


  render(){
  return (
      <div>
      
      <Button onClick={this.changePage}>Trocar de tela</Button>
        {this.state.currentPage === "signUp" ? (
          <SignUpPage />
        ) : (
          <UserListPage />
        )}
     </div>
  );
  
}
}
export default App;
