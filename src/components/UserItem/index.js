import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user: { id, login, email } }) {
  return <div>{id + ' ' + login + ',' + email}</div>;
}

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  email: PropTypes.string,
};

UserItem.defaultProps = {
  login: 'unknown user',
};

export default UserItem;
