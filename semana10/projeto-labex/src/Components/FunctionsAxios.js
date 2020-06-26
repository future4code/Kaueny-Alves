import React, { useEffect } from 'react';
import axios from 'axios';



 export const ProtectedData = async()=>{
  
  const token = window.localStorage.getItem("token")
  const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/kaueny-mello/trip/:id',{
    headers:{
      Authorization: token}
  })
  console.log(response)
 };

 

useEffect(()=>{
  const token = window.localStorage.getItem("token")

  if(token !== null){
    history.push('/CreateTripPage')
  }
 },[history])