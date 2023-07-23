import React, { useState } from 'react'
import './todo.css' ;
import { addToDo, deleteToDo, removeToDo } from '../Actions';
import { useDispatch } from 'react-redux';

const Todo = () => {
    const dispatch = useDispatch() ;
    const [inputData , setInputData] = useState("")
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption> Add you list here </figcaption>
          </figure>

          <div className='addItems'>
            <input type="text" placeholder='✍️ Add items...' value={inputData} onChange={(event) => setInputData(event.target.value) } />
            <i className='fa fa-plus add-btn' onClick={ () => dispatch(addToDo(inputData) , setInputData('')) } ></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
