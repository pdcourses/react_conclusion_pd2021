import './App.css';
import React, { Component, Fragment } from 'react';
import CounterDisplayValue from './components/CounterDisplayValue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.group('Parent constructor');
    console.log('count = ', this.state.count);
    console.groupEnd();
  }
  componentDidMount() {
    console.group('Parent componentDidMount');
    console.log('count = ', this.state.count);
    console.groupEnd();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('Parent componentDidUpdate');
    console.log('count = ', this.state.count);
    console.log('prev state = ', prevState);
    console.log('prev props = ', prevProps);
    console.log('new state =', this.state);
    console.log('new props =', this.props);
    console.groupEnd();
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
    console.group('Parent inc function');
    console.log('count = ', this.state.count);
    console.groupEnd();
  };
  render() {
    console.group('Parent render');
    console.log('count = ', this.state.count);
    console.groupEnd();

    return (
      <Fragment>
        <CounterDisplayValue count={this.state.count} />
        <button onClick={this.inc}>+</button>
      </Fragment>
    );
  }
}

export default App;
