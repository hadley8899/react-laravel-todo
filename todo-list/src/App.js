import './App.css';
import TodoPage from "./TodoPage";

const App = () => {
    return (
        <div className="container">
            <div className="p-2 mb-1 bg-light rounded-3">
                <div className="container-fluid">
                    <h1 className="display-5 fw-bold">TODO List</h1>
                    <p className="col-md-8 fs-4">Make a nice TODO list with react! isn't this fun!</p>
                </div>
            </div>

            <TodoPage/>

        </div>
    )
}

export default App;
