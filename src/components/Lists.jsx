import React from 'react'
import List from './List'
import { useSelector } from "react-redux";
const Lists = () => {
    const todo = useSelector(state => state.todo);  
    return (
        <div className='d-grid gap-2 d-md-block'>
            {todo.map((list) => {
                return <List todo={list}/>
            })}
            
        </div>
    )
}

export default Lists
