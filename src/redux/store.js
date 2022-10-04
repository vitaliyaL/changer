import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {reducerTable} from "../redux/table/reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  table:reducerTable,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
