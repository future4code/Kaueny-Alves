import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Competencias from './components/Competencias/Competencias';
import Foto from './img/kau.png';
import Life from './img/life.png';
import Email from './img/email.png';
import Endereço from './img/endereço.png';
import Labenu from './img/Labenu.png';
import Idiomas from './img/idiomas.png';
import Skills from './img/skills.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto}
          nome="Kaueny de Oliveira Alves" 
          descricao="Oi, eu sou a Kaueny. Sou estudante FullStack. Amo tecnologia e inovação, e busco de alguma forma fazer a diferença no mundo." 
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div >

      <div div className="page-section-container">
        <CardPequeno 
        
           imagem={Email} 
           texto="Email: kauenyalves@hotmail.com"
        />

        <CardPequeno 
          imagem={Endereço} 
          texto="Endereço: Rua Nicolau n.128"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Life}
          nome="Life Empresarial Saúde" 
          descricao="Assintente Adiministrativo - Contas Médicas"
        />
        
        <CardGrande 
          imagem={Life} 
          nome="Life Empresarial Saúde" 
          descricao="Atendimento ao cliente." 
        />
      </div>

      <div div className="page-section-container">
        <h2>Cursos</h2>
        <CardPequeno 
          imagem={Idiomas} 
          texto="Idiomas: Ingles Básico | Espanhol Básico"
        />

        <CardPequeno 
          imagem={Labenu} 
          texto="Labenu: FullStack - cursando"
        />
      </div>

      <div className="page-section-container">
        <Competencias 
          imagem={Skills}
          nome="Soft Skills" 
          descricao={["Comunicação", "Liderança","Trabalho em equipe", "Atitude Positiva"]}
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
