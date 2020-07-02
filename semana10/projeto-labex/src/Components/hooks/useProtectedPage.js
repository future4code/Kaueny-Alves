import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'



export const useProtectedPage = ()=>{
    const history = useHistory()
 
    useEffect(()=>{
     const token = window.localStorage.getItem("token")
 
     if(token === null){
       history.push('/LoginPage')
     }
    },[history])
 
    return <h1>Essa página só pode ser acessada por usuários logados</h1>
  };