import React, {useState} from 'react';
import './checkbox.css'
import pencil from '../../assets/icons/pencil.svg'
import trash from '../../assets/icons/trash.svg'

import {
        TodoList,
        TodoItem,
        AppTitle, 
        InputTask, 
        PencilIcon,
        DeleteIcon,
        ClearAll,
        EmptyListMessage
    } from "./style.css";

//the item (task) in the todo list
const Task = ({task, index, removeTask, toggleTask}) =>{
    return(
        <TodoItem>
            <label className="container"
                    style={{textDecoration: task.completed ? "line-through" : "" , color: task.completed ? "#5ab87d" : ""}}> 
                    {task.title}
                <input type="checkbox" checked={task.completed} onClick={() => toggleTask(index)}/>
                <span className="checkmark"></span>
            </label>
            <DeleteIcon src={trash} alt="delete item" onClick={() => removeTask(index)} />
        </TodoItem>

    )
}

//add task to the todo list
const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form style={{position: 'relative'}} onSubmit={handleSubmit}>
            <PencilIcon src={pencil} alt="add your task"/>
            <InputTask
                type="text"
                className="input"
                value={value}
                placeholder="what needs to be accomplished?"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

// the todo list component
const Todo = () => {
    const [tasks, setTasks] = useState([])

    // add the task to the todo list function
    const addTask = title => { 
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    
    // toggle the state of the task function
    const toggleTask = index =>{
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks)

    }

    // remove the task from the todo list function
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    } 

    const deleteList = () =>{
        const newTasks = [...tasks]
        newTasks.splice(0, newTasks.length);
        setTasks(newTasks);
    }

    return(
        <div className="app-container">
            <AppTitle>react to-do</AppTitle>
             <div className="add-task">
                <CreateTask addTask = {addTask}/>
            </div>
            <TodoList>            
                {tasks.length === 0 ? 
                <EmptyListMessage>your list is empty, fill it!</EmptyListMessage> 
                :tasks.map((task, index)=>(
                <Task 
                    key={index}
                    task={task}
                    index={index}
                    toggleTask={toggleTask}
                    removeTask={removeTask}
                />
            ))}
            </TodoList>

           {tasks.length !== 0 && <ClearAll onClick={deleteList}>  <DeleteIcon src={trash} alt="delete all items"/>clear all</ClearAll>}
        </div>
    )
}

export default Todo