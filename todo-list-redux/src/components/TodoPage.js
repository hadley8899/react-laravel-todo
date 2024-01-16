import {Component} from "react";
import {connect} from "react-redux";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
import {addTodoAction, deleteTodoAction, fetchTodosAction, updateTodoAction} from "../redux/actions";

class TodoPage extends Component {

    componentDidMount() {
        this.props.fetchTodos()
    }

    handleOnAddTodo = (todo) => {
        this.props.addTodo(todo)
    }

    onCompleteUpdate = (todo) => {
        this.props.updateTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    handleOnDelete = (todo) => {
        this.props.deleteTodo(todo)
    }

    render() {
        const {todos, loading} = this.props

        if (loading) {
            return (
                <div className={"pt-3"}>
                    <h1>Loading...</h1>
                </div>
            )
        }

        return (
            <div className={"pt-3"}>
                <TodoList todos={todos} onCompleteUpdate={this.onCompleteUpdate} onDelete={this.handleOnDelete}/>
                <br/>
                <TodoNew onAddTodo={this.handleOnAddTodo}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todosData.todos,
        loading: state.todosData.loading,
    }
}

const mapDispatchToProps = {
    fetchTodos: fetchTodosAction,
    addTodo: addTodoAction,
    updateTodo: updateTodoAction,
    deleteTodo: deleteTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
