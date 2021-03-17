import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

const myMiddleware = store => next => action => {
    console.log(next(action));
    return next(action);
}

const store = createStore(rootReducer,applyMiddleware(myMiddleware));

export default store;