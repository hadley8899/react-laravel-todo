import {useState} from "react";

const TodoNew = ({onAddTodo}) => {

    const [todoItem, setTodoItem] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onAddTodo({
            item: todoItem,
            completed: false
        });
        setTodoItem('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="todoItem">Todo Item</label>
                    <div className="row">
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control w-100"
                                id="todoItem"
                                name="todoItem"
                                value={todoItem}
                                onChange={(event) => setTodoItem(event.target.value)}
                            />
                        </div>
                        <div className="col-sm-4 mt-2 mt-sm-0 ms-sm-auto">
                            <button type="submit" className="btn btn-primary w-100">Add Todo</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default TodoNew;
