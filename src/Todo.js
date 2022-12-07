import React from 'react';

export default  function Tdl() {
    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({});
    const [todos, setTodos] = React.useState([]);
    const [message, setMessage] = React.useState('')
    // add list
    function addTodoHandler(event){
        event.preventDefault();

        // data validation
        if (!activity){
            return setMessage('jangan kosong')
        }
        setMessage('');
        // edit
        if (edit.id) {
            const updateTodo = {
                ...edit,
                activity,
                check : false
            }           
            const todoIndex = todos.findIndex(function(todo){
                return todo.id === edit.id
            })
            const cloneTodos = [...todos];
            cloneTodos[todoIndex] = updateTodo;
            setTodos(cloneTodos);
            setActivity('');
            
            return cancelEditTodoHandler();
        }
        setTodos([...todos, {
            id: getId(),
            activity,
            check: false
            },
        ]);
        setMessage('')
        setActivity('');
    }
    // add id key
    function getId(){
        return Date.now();
     }
    //  remove list
    function removeTodoHandler(todoId) {
        const filteredTodos = todos.filter(function(todo){
            return todo.id !== todoId;
        });
        setTodos(filteredTodos);
        if(edit.id){cancelEditTodoHandler();};        
    }
    // edit list
    function editTodoHandler(todo){
        setActivity(todo.activity);
        setEdit(todo);
    }
    // cancel edit
    function cancelEditTodoHandler(){
        console.log('cancel edit');
        setEdit({});
        setActivity('');
    }
    // checkbox
    function checkTodoHandler(todo){
        const updateTodo = {
            ...todo,
            check : todo.check ? false : true,
        }
        const todoIndex = todos.findIndex(function(currentTodo){
            return currentTodo.id === todo.id
        })
        const cloneTodos = [...todos];
        cloneTodos[todoIndex] = updateTodo;
        setTodos(cloneTodos);
    }
    return (
        <>
        <h1>Simple To Do List</h1>
        {message && <div style={{color:'red'}}> {message}</div>}
        <form onSubmit={addTodoHandler}>
            <input 
            type="text" 
            value = {activity}
            placeholder ="Activity Name"
            onChange={function(event){
                setActivity(event.target.value)
            }}
            />
            <button type="submit">{edit.id ? 'save':'add'}</button>
            {edit.id && <button onClick={cancelEditTodoHandler}>cancel</button>}
        </form>
            {todos.length > 0 ? (        <ul>
            {todos.map(function(todo){
                return <li key={todo.id}>
                    <input type="checkbox" checked={todo.check} onChange={checkTodoHandler.bind(this, todo)} />
         
           {todo.activity}
                    ({todo.check ? 'done' : 'not done'})
                <button onClick={editTodoHandler.bind(this, todo)}>edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>delete</button>
                </li>
            })}
        </ul>) : 'no activity'}
        </>
    )
}