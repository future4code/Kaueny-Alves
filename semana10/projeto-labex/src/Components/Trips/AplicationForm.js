import React,{useState} from 'react';
import styled from 'styled-components'
import Header from '../homepage/Header';

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

function AplicationForm() {
  const [form, setForm] = useState({name:"",age:"",})
    
    const onChange = (name, value) => {
        const newForm = {
            ...form,[name]: value
        }
        setForm(newForm)
        console.log(name.value)
    }

  return (
    <>
    <Header/>
     <FormContainer >
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
        
        <button >Candidate-se</button>
      </FormContainer>
      </>
  );
}

export default AplicationForm;