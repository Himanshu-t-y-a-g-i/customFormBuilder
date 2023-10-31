import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./userReducer/reducer";
import { reducer as formReducer } from "./formReducer/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({ userReducer, formReducer });

export const store = legacy_createStore(reducer, applyMiddleware(thunk));