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

  const [task,setTask] = useState([])
  const [text, setText] = useState()
  const [day, setDay] = useState()

  const handleInput =(event)=>{
    setText(event.target.value)
    console.log(event.target.value)
  }
  const handleISelect =(event)=>{
    setDay(event.target.value)
    console.log(event.target.value)
  }
  

  useEffect(()=>{
    getTasks()
  },[])

  const getTasks = ()=>{
    axios.get(baseUrl)
     .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
  };

  const createTask = (event)=>{
    event.preventDefault()
    const body = {
      text: text,
       day:day,
    }
    axios.post(baseUrl,body).then(response =>{
      console.log(response.data)
      setTask(response.data)
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
     <form>
        <input onChange={handleInput} value={text} type="text" placeholder="Tarefas"/>
        <select onChange={handleISelect} name="diaDaSemana">
            <option  value="segunda" >Segunda</option>
            <option  value="terca" >Terça</option>
            <option  value="quarta" >Quarta</option>
            <option  value="quinta" >Quinta</option>
            <option  value="sexta" >Sexta</option>
            <option  value="sabado" >Sabado</option>
            <option  value="domingo" >Domingo</option>
         </select>
        <button onClick={createTask}>Criar Tarefa</button>
     </form>



<Container>

  <Days>
    <p>Segunda</p>
  <ul>{task}</ul>
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
