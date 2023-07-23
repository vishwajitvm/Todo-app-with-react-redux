import React, { useState } from 'react'
import './todo.css';
import { addToDo, deleteToDo, removeToDo } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);
    const [inputData, setInputData] = useState("")
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption> Add you list here </figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder='✍️ Add items...' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addToDo(inputData), setInputData(''))} ></i>
                    </div>

                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3> {elem.data} </h3>
                                        <div className="todo-btn">
                                            <i className='far fa-trash-alt add-btn' title='Delete item' onClick={() => dispatch(deleteToDo(elem.id))} ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className='shshowItemsshowItemsow'>
                        <button className='btn effect04' data-sm-link-text="remove All" onClick={ () => dispatch(removeToDo()) }> <span> Check list </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
