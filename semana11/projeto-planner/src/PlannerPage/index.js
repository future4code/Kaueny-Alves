import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";
import Card from "@material-ui/core/Card"

const AppBar = styled.header`
    background-color: #0001;
    color: gray;
    text-align: center;
    padding: 5px;
    font-family: cursive;
    font-size: 30px;
`;

const ContainerTask = styled.section`
    width: 100vw;
    height:100vh;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    display: flex;
`;

const Container = styled.div`
    width: 100vw;
    height:100vh;
    background-color: #0011;

`;

const FormTask = styled.form`
    width: 400px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
   margin-top: 10px;
    
   
`;

const Days = styled(Card)`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    width: 150px;
    height: 300px;
    margin-top: 30px;
    padding: 10px;
`

const Task = styled.li`
    text-align: left;
    font-family: Roboto;
    font-size: 14px;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-kaueny"

function Planner() {

  const [task,setTask] = useState([])
  const [text, setText] = useState("")
  const [day, setDay] = useState([])


  const handleInput =(event)=>{
    setText(event.target.value)
   
  }
  const handleISelect =(event)=>{
    setDay(event.target.value)
    
  }
  

  useEffect(()=>{
    getTasks()
  },[setTask])

  const getTasks = ()=>{
    axios.get(baseUrl)
     .then(response=>{
       setTask(response.data)
    }).catch(error=>{
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
      setText("")
      getTasks()
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

const selectTask = (id) => {
  const newTaskList = task.map((task) => {
    if(task.id === id) {
      return {
          ...task,
          completed: !task.completed
      }
  }
  return task
})
setTask(newTaskList)
} 


  return (
    <Container>
    <AppBar>Planner</AppBar>
    <FormTask>
        <input onChange={handleInput} value={text} type="text" placeholder="Criar tarefas"/>
        <select onChange={handleISelect} name="diaDaSemana">
            <option  value="" >Dia da Semana</option>
            <option  value="segunda" >Segunda</option>
            <option  value="terca" >Terça</option>
            <option  value="quarta" >Quarta</option>
            <option  value="quinta" >Quinta</option>
            <option  value="sexta" >Sexta</option>
            <option  value="sabado" >Sabado</option>
            <option  value="domingo" >Domingo</option>
         </select>
        <button onClick={createTask}>Criar Tarefa</button>
     </FormTask>

    

      <ContainerTask>

          <Days id="segunda"> 
          <strong>Segunda</strong>
          <ul>
            {task && task.map((task, index) => {
                              if (task.day === "segunda") {
                                return ( 
                                        <Task
                                            onClick={() => selectTask(task.id)} 
                                            key={index} 
                                            completed={task.completed}
                                        >
                                            {task.text}
                                        </Task>  
                                )
                            } else {
                                return null
                            }
                        })}
          </ul>
          </Days>
          
          <Days id="terca" >
          <strong>Terça</strong>
          <ul>
            {task && task.map((task, index) => {
                              if (task.day === "terca") {
                                return ( 
                                        <Task
                                            onClick={() => selectTask(task.id)} 
                                            key={index} 
                                            completed={task.completed}
                                        >
                                            {task.text}
                                        </Task>  
                                )
                            } else {
                                return null
                            }
                        })}
            </ul>
          </Days>

          <Days id="quarta">
          <strong>Quarta</strong>
          <ul>
            
            {task && task.map((task, index) => {
                                if (task.day === "quarta") {
                                  return ( 
                                          <Task
                                              onClick={() => selectTask(task.id)} 
                                              key={index} 
                                              completed={task.completed}
                                          >
                                              {task.text}
                                          </Task>  
                                  )
                              } else {
                                  return null
                              }
                          })}
            </ul>
          </Days>


          <Days id="quinta">
          <strong>Quinta</strong>
          <ul>
            {task && task.map((task, index) => {
                                if (task.day === "quinta") {
                                  return ( 
                                          <Task
                                              onClick={() => selectTask(task.id)} 
                                              key={index} 
                                              completed={task.completed}
                                          >
                                              {task.text}
                                          </Task>  
                                  )
                              } else {
                                  return null
                              }
                          })}
          </ul>
          </Days>

          <Days id="sexta">
          <strong>Sexta</strong>
          <ul>
            {task && task.map((task, index) => {
                                if (task.day === "sexta") {
                                  return ( 
                                          <Task
                                              onClick={() => selectTask(task.id)} 
                                              key={index} 
                                              completed={task.completed}
                                          >
                                              {task.text}
                                          </Task>  
                                  )
                              } else {
                                  return null
                              }
                          })}
          </ul>
          </Days>

          <Days id="sabado">
          <strong>Sábado</strong>
          <ul>
            {task && task.map((task, index) => {
                                if (task.day === "sabado") {
                                  return ( 
                                          <Task
                                              onClick={() => selectTask(task.id)} 
                                              key={index} 
                                              completed={task.completed}
                                          >
                                              {task.text}
                                          </Task>  
                                  )
                              } else {
                                  return null
                              }
                          })}
          </ul>
          </Days>

          <Days id="domingo" >
          <strong>Domingo</strong>
          <ul>
            {task && task.map((task, index) => {
                                if (task.day === "domingo") {
                                    return ( 
                                            <Task
                                                onClick={() => selectTask(task.id)} 
                                                key={index} 
                                                completed={task.completed}
                                            >
                                                {task.text}
                                            </Task>  
                                    )
                                } else {
                                    return null
                                }
                            })}
        </ul>
          </Days>

        </ContainerTask>

    
    </Container>
  );
}

export default Planner;
