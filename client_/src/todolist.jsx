import React,{useState , useEffect} from "react";
import axios from 'axios'

function List(){
    const [todos , setTodos] = useState([]);
    const [newTodo , setNewTodo] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:5000/todos')
        .then(response =>{
            setTodos(response.data);
        })
    },[]);

    const handleAddTodo = () =>{
        axios.post('http://localhost:5000/todos',{title : newTodo})
        .then(response =>{
            setTodos([...todos,response.data]);
            setNewTodo('');
        })
    }

    return(
        <div>
            <h1>TODOlist</h1>

            <input
            type="text" 
            value={newTodo} 
            onChange={(e)=>{setNewTodo(e.target.value)}}
            />

            <button onClick={handleAddTodo}>Add todo</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;