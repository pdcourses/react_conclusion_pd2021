import './App.css';
import React, { Component, Fragment } from 'react';
import CounterDisplayValue from './components/CounterDisplayValue';

/*
Props && State только для чтения!!!!!
имутальбальный, неизменяемое

аналог чистых функций

setState запрос на измение. итог его - создание нового состояния, замена (аналог http-запроса)

-------------------------
setState

нельзя this.state.count = 10;

1 this.setState({ count: this.state.count + 1 })]

 - this.setState({ count: ++count })

2 this.setState ( (state,props) => ({ count: state.count + props.step }) );

 - this.setState ( { count: this.state.count + this.props.step } );

*/

/*

Передача данных в реакт

1 Родитель (state:count) -> Ребенок

parent <Child count={this.state.count} />
child  this.props.count

2 Ребенок (установить новое состояние родителя count ) -> Родитель (state:count)
через callback

parent:

1
 updateCount = (value) => {
  this.setState({count: value})
}

2 
<Child updateCount={this.updateCount} />

child:
есть свое состояние score установить как состояние state для родителя


this.props.updateCount(this.state.score)


3 Ребенок 1 => Ребенок2
только через родителя

1 сп (совместное использование) поднять состояние до ближайшего родителя

2 сп 1 данные от ребенка1 к родителя через колбэк 2 родитель через пропсы передает данные ребенку2


*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('this constructor', this);
    this.inc = this.inc.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  inc() {
    // this.state.count = this.state.count + 1; ошибка!!!
    console.log('this function ', this);
    return this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <Fragment>
        <CounterDisplayValue count={this.state.count} />
        <button onClick={this.inc}>+</button>
      </Fragment>
    );
  }
}

export default App;
