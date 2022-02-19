import './App.css';
import React, { Component, Fragment } from 'react';
import UserList from './components/UserList';

const newUser = {
  id: 100,
  login: 'vasya100',
  email: 'vasya@mail.com',
};

const newUser2 = {
  id: 200,
  name: 'vasya',
};

const data = [
  {
    id: 1,
    login: 'vasya101',
    email: 'vasya@mail.com',
  },
  {
    id: 2,
    login: 'vasya102',
    email: 'vasya@mail.com',
  },
  {
    id: 3,
    login: 'vasya103',
    email: 'vasya@mail.com',
  },
  {
    id: 4,
    login: 'vasya104',
    email: 'vasya@mail.com',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <UserList users={data} />
      </Fragment>
    );
  }
}

export default App;
