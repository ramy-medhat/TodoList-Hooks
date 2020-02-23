import React, {useState} from 'react';

//the item (task) in the todo list
const Task = ({task, index, removeTask, toggleTask}) =>{
    return(
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
         >
        <input type="checkbox" onClick={() => toggleTask(index)}/>
        {task.title}
        <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
    </div>
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

// the todo list component
const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ])

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
             <div className="add-task">
                <CreateTask addTask = {addTask}/>
            </div>

            <h2>Todo List</h2>
            {tasks.map((task, index)=>(
                <Task 
                    key={index}
                    task={task}
                    index={index}
                    toggleTask={toggleTask}
                    removeTask={removeTask}
                />
            ))}
           <button onClick={deleteList}>delete all</button>
        </div>
    )
}

export default Todo