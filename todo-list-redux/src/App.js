import {Component} from 'react';
import TodoPage from "./components/TodoPage";
import {Provider} from "react-redux";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <TodoPage/>
                </div>
            </Provider>
        );
    }
}

export default App;
