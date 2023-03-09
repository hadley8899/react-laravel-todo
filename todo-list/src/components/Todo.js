import {useState} from "react";

const Todo = ({onCompleteCheck, onDelete, todo}) => {
    const [checked, setChecked] = useState(todo.completed);

    const onCompleteCheckboxChecked = () => {
        setChecked((currentChecked) => {
            const newChecked = !currentChecked;

            onCompleteCheck({
                ...todo,
                completed: !newChecked
            });

            return newChecked;
        });
    }

    const onDeleteButtonClick = () => {
        onDelete(todo);
    }

    return (
        <>
            <label className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <input
                        className="form-check-input flex-shrink-0 me-2"
                        type="checkbox"
                        checked={checked}
                        onChange={() => onCompleteCheckboxChecked(todo.id)}
                    />
                    {todo.item}
                </div>
                <div>
                    <button type="button" className="btn btn-outline-danger" onClick={() => onDeleteButtonClick(todo.id)}>Delete</button>
                </div>
            </label>
        </>
    )

}

export default Todo
