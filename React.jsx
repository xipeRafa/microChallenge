import React from "react";
import "./styles.css";
import {Fragment, useState} from 'react'
import { render } from "react-dom";


export default function App() {

  const [state, setState]=useState({
    text:'',
  })
  const {text} = state

  const handleState = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }
  
  const [arr, setArr]=useState([])

  const handleArr = () => {
    setArr([...arr, state])
    setArrFinder([...arrFinder, state])
  }

  console.log('arr:', arr)

  const sendForm = (e) => {
    e.preventDefault();

    handleArr()

    if(edit){ 
       setArr(arr.map(el => el.id === state.id ? state : el ))
       setEdit(null)
    }else{
      state.id=Date.now()
      state.toggle=false
    }
    setState({text:'',})
  }
  
  const deleteItem = id => {
    setArr(arr.filter(el => el.id !== id))
  }
  
  const [edit, setEdit]=useState(null)
  console.log('edit', edit)

  const editItem = up =>{
    setState(up)
    setEdit(up)
  }
  const toggle = id => {
    setEdit(arr.map(el => el.id === id ? el.toggle = !el.toggle : el.toggle ))
    setEdit(null)
  }


  const [finder, setFinder]=useState('')
  const [arrFinder, setArrFinder]=useState([])
  

  const handleSearch = (e) => {
    setFinder(e.target.value)

    setArr(arrFinder.filter(el => el.text.indexOf(finder) > -1))

   /*  if(e.keyCode === 13){
     document.querySelector('input').value='';
    } */
  }

return (
  <Fragment>
     
    <input type='text' 
           placeholder='search' 
           onKeyDown={handleSearch}
            />

    <form onSubmit={sendForm}>

    <input 
        autoComplete='off'
        type='text' 
        name='text'
        onChange={handleState}
        value={text}
    />

    <button type='submit'>{edit ? 'Save Edit' : 'To Do'}</button>
    </form>

     { arr.map(el => 
          <div key={el.id}>
              <p>{el.text}</p> 
              <button onClick={()=> deleteItem(el.id)}>Delete</button>
              <button onClick={()=> editItem(el)}>Edit</button>
              <label htmlFor={el.id}>Completed</label>
              <input type='checkbox' id={el.id} onClick={()=> toggle(el.id)} />
          </div>
     )}
    
  </Fragment>
  );
}

