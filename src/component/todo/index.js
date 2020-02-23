import React, {useState} from 'react';



//add task to the todo list
function CreateTask({ addTask }) {
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
    const [todos, setTodos] = useState([
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

    const addTask = title =>{
        const newTodos = [...todos, { title, completed: false }];
        setTodos(newTodos);
    }   

    return(
        <div className="app-container">
             <div className="add-task">
                <CreateTask addTask = {addTask}/>
            </div>

            <h2>Todo List</h2>
            {todos.map((todo, index)=>(
                <p key={index}>{todo.title}</p>
            ))}
           
        </div>
    )
}

export default Todo