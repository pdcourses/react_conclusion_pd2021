import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';

// class / fun

class App extends Component {
  render() {
    return (
      // '5'  => +'5'
      <Fragment>
        <h1>sdfsdfsdfsd</h1>
        <p>10+2</p>
        <p>{10 + 2}</p>
        <p>
          {10 + 2} and some {2 + 2}
        </p>
        <p id={2 + 2}>text1</p>
        <p id={12 + 12}>text2</p>
        <p>text3</p>
      </Fragment>
    );
  }
}
/*
function App() {
  return null;
}
*/

export default App;
