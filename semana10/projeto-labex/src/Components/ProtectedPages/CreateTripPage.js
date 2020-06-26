import React from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';


function CreateTripPage() {

  useProtectedPage()

  const logout = ()=>{
    window.localStorage.clear()
  }

  return (
  <>
  
    <form >
      <input />
      <input />
      <input />
      <input />
      <button>enviar</button>
   </form>
   <button onClick={logout}>Logout</button>
   </>
  );
}

export default CreateTripPage;