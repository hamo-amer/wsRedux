import React,{useState} from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"

function ListTask() {
    const [filter,setFilter] =useState(false)
    const [done,setDone]=useState(false)
    const todos = useSelector(state => state.todosReducer.todos)
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={()=>{setFilter(true);setDone(true)}} >Show Done</Button>
                <Button variant="outline-danger" onClick={()=>{setFilter(true);setDone(false)}} > Show Not Done</Button>
                <Button variant="info"onClick={()=>setFilter(false)} >Remove All Filters</Button>
            </div>
            {
                !filter ? todos.map((task, index) => (<Task toDo_task={task} key={index} index={index} />)):
                done ? todos.filter(todo=>todo.isDone===true).map((task, index) => (<Task toDo_task={task} key={index} index={index} />)):
                todos.filter(todo=>todo.isDone===false).map((task, index) => (<Task toDo_task={task} key={index} index={index} />))
            }
        </div >
    )
}

export default ListTask
