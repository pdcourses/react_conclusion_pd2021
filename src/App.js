import styles from './App.module.css';
import React, { Component, Fragment } from 'react';
import ColorHash from 'color-hash';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import classNames from 'classnames';
import _ from 'lodash';

const users = [];

const SelectedList = (props) => {
  const { users } = props;
  return (
    <ul style={{ textAlign: 'left' }}>
      {users.map((item, index, arr) => (
        <li className={styles.selectedItem}>{`${item.name} ${item.surname} ${
          index == arr.length - 1 ? '' : ','
        }`}</li>
      ))}
    </ul>
  );
};

const User = (props) => {
  const { user, select, index } = props;

  const onSelect = () => {
    select(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.userImageWrapper}>
        <img className={styles.userImage} src={user.imageSrc} alt="avatar" />
      </div>
      <div className={styles.userInfoWrapper}>
        <div className={styles.fullname}>{`${user.name} ${user.surname}`}</div>
        <div className={styles.info}>Level {user.level}</div>
      </div>
      <div
        onClick={onSelect}
        className={classNames(styles.check, {
          [styles.checked]: user.isSelected,
        })}
      >
        <Icon path={mdiCheck} color={'white'} />
      </div>
    </div>
  );
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: users.map((u) => ({ ...u, isSelected: false })),
    };
  }

  select = (index) => {
    const newItems = _.clone(this.state.items);
    newItems[index].isSelected = !newItems[index.isSelected];
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    return (
      <ul className={styles.container}>
        {
          <li className={styles.userCardContainer}>
            <span className={styles.info}>To: </span>
            <SelectedList users={items.filter((item) => item.isSelected)} />
          </li>
        }
        {items.map((item, index) => (
          <li key={item.id}>
            <User index={index} select={this.select} user={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
