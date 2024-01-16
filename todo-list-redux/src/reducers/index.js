import {combineReducers} from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todosData: todoReducer
})

export default rootReducer;
