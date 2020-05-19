import React from 'react';
 import styled from 'styled-components';
 import Etapa1 from './componentes/Etapa1';
 import Etapa2 from './componentes/Etapa2';
 import Etapa3 from './componentes/Etapa3';
 import Final from './componentes/Final.js';


  const Container = styled.div `
    display: block;
    text-align: center;
  `

 class App extends React.Component {


  
   state = {
     etapa: 1
    
   }
  
   
   renderizaEtapa = ()=>{
     switch (this.state.etapa){
       case 1:
         return <Etapa1 />;
       case 2:
         return <Etapa2 />;
       case 3:
         return <Etapa3 />;
       case 4:
         return <Final />;
       default:
         return
     }
   }



   irParaProximaEtapa = () => {
     this.setState({etapa: this.state.etapa + 1})
   }
    

   render (){

   return (
      
     <Container>
       {this.renderizaEtapa()}
       <br/>
       {this.state.etapa < 4 && <button onClick={this.irParaProximaEtapa}>Próxima etapa</button> }
     </Container>
   );
 }
 }
 export default App;