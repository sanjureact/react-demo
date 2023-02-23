import { combineReducers } from "redux";
import { LoginAuthReducer } from "./Reducer/AuthReducer";
import {
  addBlogReducer,
  BlogReducerData,
  deleteBlogReducer,
  singleUserBlogReducer,
  updateBlogReducer,
  userReducers,
} from "./Reducer/BlogReducer";
import { PostReducerData } from "./Reducer/PostReducer";
export default combineReducers({
  AuthLoginStateData: LoginAuthReducer,
  PostDataState: PostReducerData,
  BlogsDataState: BlogReducerData,
  BlodAddState: addBlogReducer,
  BlogDeleteState: deleteBlogReducer,
  BlogSigleuserState: singleUserBlogReducer,
  BlogUpdateState: updateBlogReducer,
  user: userReducers,
});
