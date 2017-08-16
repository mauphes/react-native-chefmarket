import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Provide from "./components/Provide";
import Container from "./components/Container";

export default class App extends Component {
  store = createStore(rootReducer, applyMiddleware(thunk));

  render() {
    return (
      <Provide store={this.store}>
        <Container />
      </Provide>
    );
  }
}