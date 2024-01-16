import {Component} from "react";

class TodoList extends Component {
    render() {
        const {todos, onCompleteUpdate, onDelete, loading} = this.props;

        if (loading) {
            return (
                <div className={"pt-3"}>
                    <h1>Loading...</h1>
                </div>
            )
        }

        return (
            <ul className="list-group">
                {todos.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id={`todo-${todo.id}`}
                                   checked={todo.completed} onChange={() => onCompleteUpdate(todo)}/>
                            <label className="form-check-label" htmlFor={`todo-${todo.id}`}>
                                {todo.item}
                            </label>
                            <br/>
                            <span className={"text-muted"}>{todo.created_at}</span>
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TodoList;
