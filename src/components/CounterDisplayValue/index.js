import React, { Component, Fragment } from 'react';

class CounterDisplayValue extends Component {
  constructor(props) {
    super(props);
    console.group('Child constructor');
    console.log('props children = ', this.props);
    console.groupEnd();
  }
  componentDidMount() {
    console.group('Child componentDidMount');
    console.log('props = ', this.props);
    console.groupEnd();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('Child componentDidUpdate');
    console.log('prev state = ', prevState);
    console.log('prev props = ', prevProps);
    console.log('new state =', this.state);
    console.log('new props =', this.props);
    console.groupEnd();
  }
  render() {
    console.group('Child render');
    console.log('props= ', this.props);
    console.groupEnd();

    return (
      <Fragment>
        <h1>{this.props.count}</h1>
      </Fragment>
    );
  }
}

export default CounterDisplayValue;
