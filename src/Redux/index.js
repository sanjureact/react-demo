import { combineReducers } from "redux";
import { LoginAuthReducer } from "./Reducer/AuthReducer";
import { PostReducerData } from "./Reducer/PostReducer";
export default combineReducers({
  AuthLoginStateData: LoginAuthReducer,
  PostDataState: PostReducerData,
});
