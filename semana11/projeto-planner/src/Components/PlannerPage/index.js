import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";

const AppBar = styled.header`
    background-color: black;
    color: white;
    text-align: center;
    padding: 15px;
    font-family: cursive;
    font-size: 20px;
`;

const Container = styled.section`
     width: 100vw;
    height:100vh;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    display: flex;
`;

const Days = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    border: 1px solid black;
    width: 150px;
    height: 300px;
    margin-top: 30px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kaueny"

function Planner() {

  const [dia, setDia] = useState()
  const [task,setTask] = useState()

  /*const [form, setForm] = useState({})

     const onChange = (name, value) => {
     const onChange = (event) => {
       const {name,value} = event.target
         const newForm = {
             ...form,[name]: value
         }
         setForm(newForm)
         console.log(name.value)
         console.log(event.target)
     }*/

  useEffect(()=>{
    getTasks()
  },[setDia,setTask])

  const getTasks = ()=>{
    axios.get(baseUrl)
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  };

  const createTask = ()=>{
    const body = {
      text: "Lavar a louça",
      day: "Segunda"
    }
    axios.post(baseUrl,body).then(response =>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }

  const deleteTask = ()=>{
  
    axios.post(baseUrl/task.id).then(response =>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  }




  return (
    <div>
     <AppBar>Planner</AppBar>
     <div>
        
        <input type="text" placeholder="Tarefas"/>
        <select name="diaDaSemana">
            <option name="segunda" value="segunda">Segunda</option>
            <option name="terca" value="terca">Terça</option>
            <option name="quarta" value="quarta">Quarta</option>
            <option name="quinta" value="quinta">Quinta</option>
            <option name="sexta" value="sexta">Sexta</option>
            <option name="sabado" value="sabado">Sabado</option>
            <option name="domingo" value="domingo">Domingo</option>
         </select>
        <button onClick={createTask}>Criar Tarefa</button>
     </div>



<Container>

  <Days>
    <p>Segunda</p>
    <ul></ul>
  </Days>
  
  <Days>
    <p>Terca</p>
    <ul></ul>
  </Days>

  <Days>
    <p>Quarta</p>
    <ul></ul>
  </Days>


  <Days>
    <p>Quinta</p>
    <ul></ul>
  </Days>

  <Days>
    <p>Sexta</p>
   <ul></ul>
  </Days>

  <Days>
    <p>Sábado</p>
    <ul></ul>
  </Days>

  <Days>
    <p>Domingo</p>
    <ul></ul>
  </Days>

 </Container>

    </div>
  );
}

export default Planner;
