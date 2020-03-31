import { createStore, applyMiddleware, combineReducers } from "redux";
import { ifLogged } from "./login/reducers";
import thunk from "redux-thunk"; //有什么作用？
import { createLogger } from "redux-logger";

let middleware = [thunk]; //有什么作用？
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const store = createStore(
  combineReducers({ifLogged}),
  applyMiddleware(...middleware)
  );
  
export  { store };