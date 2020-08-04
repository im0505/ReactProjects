import { combineReducers } from "redux";
import postsReducers from "./postReducers";
import usersReducers from "./usersReducers";

export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
});
