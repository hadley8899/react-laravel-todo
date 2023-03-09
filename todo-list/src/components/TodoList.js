import Todo from "./Todo";

const TodoList = ({todos, onCompleteUpdate, onDelete}) => {
    const todoList = todos.map(todo => {
        return (
            <Todo onCompleteCheck={onCompleteUpdate} onDelete={onDelete} key={todo.id} todo={todo}/>
        )
    });

    return (
        <div>
            <div className="list-group mx-0 w-auto">
                {todoList}
            </div>
        </div>
    )
}

export default TodoList
