import React from 'react'
import './todo.css' ;

const Todo = () => {
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption> Add you list here </figcaption>
          </figure>

          <div className='addItems'>
            <input type="text" placeholder='✍️ Add items...' />
            <i className='fa fa-plus add-btn'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
