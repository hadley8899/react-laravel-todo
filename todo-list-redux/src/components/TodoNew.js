import {Component} from "react";

class TodoNew extends Component {
    state = {
        item: ""
    };

    handleChange = (e) => {
        this.setState({item: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTodo({item: this.state.item, completed: false});
        this.setState({item: ""}); // Reset input after submission
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mb-3">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="New Todo" value={this.state.item}
                           onChange={this.handleChange}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TodoNew;
