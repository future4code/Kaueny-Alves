import React from 'react';


class Etapa1 extends React.Component {
    render(){
    return (
      <div>
        <h2>DADOS GERAIS</h2>

        <p>1. Qual é o seu nome?</p>
        <input />

        <p>2. Qual é a sua idade?</p>
        <input />

        <p>3. Qual é o seu email?</p>
        <input />

        <p>4. Qual é a sua escolaridade?</p>
        <select>
        <option value="emi">Ensino médio incompleto</option>
        <option value="emc">Ensino médio completo</option>
        <option value="esi">Ensino superior incompleto</option>
        <option value="esc">Ensino superior completo</option>
        </select> 
       


      </div>
    );
  }
  }
  export default Etapa1;