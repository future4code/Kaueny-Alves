import React,{useState} from 'react';
import styled from 'styled-components'
import axios from 'axios';

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

function AplicationForm(props) {
  const trips = props.trips
  const [form, setForm] = useState({})
    
    const onChange = (event) => {
      const {name,value} = event.target
        const newForm = {
            ...form,[name]: value
        }
        setForm(newForm)
        console.log(event.target)
    }
    const Aplication = async (event) => {
      event.preventDefaul()
      try {
      const response = await axios.post (`${baseUrl}/trips/${trips.id}/apply`)
        console.log(response)
        alert("Voce esta inscrito")
      } catch(error){
        console.log(error)
        alert("Voce não esta inscrito")
      }
    }



  return (
    <>
    
     <FormContainer>
        <label forHtml="name">Nome</label>
        <input name="name" value={form.name} type="text" onChange={onChange}/>
        
        <label forHtml="age">Idade</label>
        <input name="age" value={form.age} type="number" onChange={onChange}/>
        
        <label forHtml="description">Porque vc quer Viajar</label>
        <input name="description" value={form.description} type="text" onChange={onChange}/>
        
        <label forHtml="profession">Profissão</label>
        <input name="profession" value={form.profession} type="text" onChange={onChange}/>
        
        <label forHtml="country">País</label>
        <input name="country" value={form.country} type=""onChange={onChange}/>
        
        <button onClick={Aplication}>Candidate-se</button>
      </FormContainer>
      
      </>
  );
}

export default AplicationForm;