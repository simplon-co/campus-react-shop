import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import routeReducer from "../reducers/index";


const store = createStore(
    routeReducer,
    applyMiddleware(thunk)
);
export default store;



