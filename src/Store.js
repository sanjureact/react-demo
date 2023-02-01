import { applyMiddleware, legacy_createStore } from "redux";
import rootRedcuer from "./Redux";
import thunk from "redux-thunk";

export const store = legacy_createStore(rootRedcuer, applyMiddleware(thunk));
