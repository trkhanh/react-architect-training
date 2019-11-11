import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import devToolsEnhancer from "remote-redux-devtools";

//IMPORT REDUX
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import store from './redux/store/store';


//CREATE STORE
// const store = createStore(rootReducer, devToolsEnhancer());

// ReactDOM.render(<Provider store={store}>
//     <App />
// </Provider>, document.getElementById('root'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
