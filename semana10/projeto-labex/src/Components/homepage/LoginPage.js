import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import { Card } from '@material-ui/core';


const Container = styled.div`
     display: flex;
     flex-direction:column;
     align-items: center;
     width: 800px;
     height: 500px;
 `;

const Login = styled(Card)`
     display: flex;
     flex-direction:column;
     align-items: center;
     justify-content: space-between;
     padding: 30px;
     margin: 30px;
     width: 200px;
     height: 200px;

 `;

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello'


function LoginPage() {

  const history = useHistory() 

  const [form, setForm] = useState({})
    
  const onChange = (event) => {
      const {name,value} = event.target
        const newForm = {
            ...form,[name]: value
        }
        setForm(newForm)
        console.log(event.target)
    }

  
  const login = async () => {
    const loginBody = {
      email: form.email,
      password: form.password,
    } 
    try {
    const response = await axios.post (`${baseUrl}/login`,loginBody)
      console.log(response.data)
      window.localStorage.setItem('token', response.data.token)
      alert("Voce esta logado")
      history.push("/CreateTripPage")
    } catch(error){
      console.log(error)
      alert("Voce não esta logado")
    }
  }

  const logout = ()=>{
    window.localStorage.clear()
  }
  
  return (
    <Container>
    <Login >
      <label forHtml="email">Email</label>
      <input name="email" value={form.email} onChange={onChange} />
      <label forHtml="password">Senha</label>
      <input  name="password" value={form.password} onChange={onChange} />
      <button onClick={login}>login</button>
    </Login>
    <button onClick={logout}>Logout</button>
    </Container>
  );
}

export default LoginPage;
