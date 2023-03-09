import TodoList from "./components/TodoList";
import {useEffect, useState} from "react";
import {addTodo, deleteTodo, fetchTodos, updateTodo} from "./todo.api";
import TodoNew from "./components/TodoNew";

const TodoPage = () => {

    const [todos, setTodos] = useState([]);
    const handleLoadTodos = () => {
        fetchTodos()
            .then(response => {
                setTodos(response.data.data);
            })
            .catch(error => console.log(error))
    }

    const handleOnAddTodo = (todo) => {
        addTodo(todo)
            .then(response => {
                setTodos([...todos, response.data.data]);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        handleLoadTodos();
    }, []);

    const onCompleteUpdate = (todo) => {
        const updatedTodo = {
            ...todo,
            completed: !todo.completed
        }
        updateTodo(updatedTodo)
            .then(response => {
                const updatedTodos = todos.map(todo => {
                    if (todo.id === response.data.data.id) {
                        return response.data.data;
                    }
                    return todo;
                })
                setTodos(updatedTodos);
            })
            .catch(error => console.log(error))
    }

    const handleOnDelete = (deletedTodo) => {
        deleteTodo(deletedTodo)
            .then(() => {
                const updatedTodos = todos.filter(todo => todo.id !== deletedTodo.id);
                setTodos(updatedTodos);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <TodoList todos={todos} onCompleteUpdate={onCompleteUpdate} onDelete={handleOnDelete}/>

            <br/>

            <TodoNew onAddTodo={handleOnAddTodo}/>
        </div>
    )

}

export default TodoPage;
