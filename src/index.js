import React from "react"; //引入模块是否需要同名 //css文件到倒入会不会引发多个模块
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from  "./router/router";
import 'antd/dist/antd.css'; //css文件的引入会不会导致多个重复的模块
import { store } from "./store/store";

const rootElement = document.getElementById("root");
console.log(<App/>);
console.log("store", store);
ReactDOM.render(
  <Provider store={store}>
    <App/> 
  </Provider>,
  rootElement
);