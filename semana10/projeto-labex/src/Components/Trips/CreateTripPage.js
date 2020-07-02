import React,{ useState} from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';
import styled from 'styled-components';
import axios from "axios";

const FormContainer = styled.form`
     display: flex;
     flex-direction:column;
     align-items: center;
     justify-content: space-between;
     padding: 30px;
     border: 1px solid black;
     margin: 30px;
     width: 500px;
     height: 500px;
 `;

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello'


function CreateTripPage() {

  useProtectedPage()
  
  const [form, setForm] = useState({})
    
    const onChange = (event) => {
      const {name,value} = event.target
        const newForm = {
            ...form,[name]: value
        }
        setForm(newForm)
        console.log(event.target)
    }
    const createTrips = async (event) => {
      event.preventDefaul()
      
      const token = window.localStorage.getItem('token')
      const axiosConfig ={
        headers: {auth: token,}
      }
      try {
      const response = await axios.post (`${baseUrl}/trips`, form, axiosConfig)
        console.log(response)
        alert("Viagem criada com sucesso")
      } catch(error){
        console.log(error)
        alert("Voce não conseguiu criar a viagem")
      }
    }

  return (
  <>
    <FormContainer >
      <label forHtml="name">Nome</label>
      <input name="name" value={form.name} type="text" onChange={onChange}/>
      <label forHtml="planet">Planeta</label>
      <input name="planet" value={form.planet} type="text" onChange={onChange}/>
      <label forHtml="date">Data</label>
      <input name="date" value={form.date} type="date" onChange={onChange}/>
      <label forHtml="description">Descrição</label>
      <input name="description" value={form.description} type="text" onChange={onChange}/>
      <label forHtml="durationInDays">Duração da viagem</label>
      <input name="durationInDays" value={form.durationInDays} type="number" onChange={onChange}/>
      <button onclick={createTrips}>enviar</button>
   </FormContainer>
   
   </>
  );
}

export default CreateTripPage;