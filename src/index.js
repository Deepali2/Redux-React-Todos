import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux"; //to make the store to connect redux with react
import rootReducer from "./rootReducer";
import {Provider} from "react-redux"; // to tell the react application about the store created for it
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

//redux thunk allows us to write action creators that return a function instead of an action.
//the thunk delays dispatch so that we can wait until some asyncronous action has completed and then we can dispatch an action
//We previously saw that action creators are just simple functions that return an object or some kind of action.

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )  
); // gogle redux dev tools, zalmoxissus link(https://github.com/zalmoxisus/redux-devtools-extension), basic store

//wrap the application with the Provider. store={store is the glue between the react application and the redux store} Now any component we make will have access to the Redux srore
//previously the only thing that could dispatch actions was
//the redux store. But now any component will be able to 
//dispatch actions so the react components do not need to 
//keep track of the state as redux is doing that for them.s
//dataflow: create store, reducer function, mapStateToProps, component
ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);


