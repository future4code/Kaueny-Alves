import React, {useState} from 'react'


export const useForm =(initialState)=>{
    const [form, setForm] = useState(initialState)
    

    const onChangeInput = (event) => {
        const {name,value} = event.target
          const newForm = {
              ...form,[name]: value
          }
         setForm(newForm)
         
         console.log(event.target)
     }
        return[form, onChangeInput]
    }
    
   
