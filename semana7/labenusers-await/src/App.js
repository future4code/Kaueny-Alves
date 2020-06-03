import React from 'react';
import axios from "axios";
import SignUpPage from './components/SignUpPage';
import UserListPage from './components/UserListPage';


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
      
      <button onClick={this.changePage}>Trocar de tela</button>
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
