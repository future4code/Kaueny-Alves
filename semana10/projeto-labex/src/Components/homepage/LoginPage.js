import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello'


function LoginPage() {

  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("")
  const history = useHistory() 


  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  
  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
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

  
  return (
    <div >
      <input value={email} onChange={handleEmail} />
      <input  value={password} onChange={handlePassword} />
      <button onClick={login}>enviar</button>
    </div>
  );
}

export default LoginPage;
