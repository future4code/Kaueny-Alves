import React from 'react';
import axios from "axios";
import styled from "styled-components"
import CriaPlayList from "./components/CriaPlaylist"





class App extends React.Component {

  render (){
  return (
    <div>
  <CriaPlayList />
    </div>
  )}
}

export default App;
