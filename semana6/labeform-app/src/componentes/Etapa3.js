import React from 'react';


class Etapa3 extends React.Component {
    render(){
    return (
      <div>
         <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>

            <p>5. Por que você não terminou um curso de graduação?</p>
            <input />

            <p>6. Você fez algum curso complementar?</p>
            <input />
            <br/> <br/>
            
        <select>
            <option value="nh">Nenhum</option>
            <option value="cri">Curso de inglês</option>
            <option value="crt">Curso técnico</option>
        </select>
           
      </div>
    );
  }
  }
  export default Etapa3;