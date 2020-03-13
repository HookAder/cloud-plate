import React from 'react';
import Header from '../../common/header';
import NavBar from '../../common/navBar';
import {
  UserWrapper
} from './style';
import './index.scss';
import './style';

const User = () => {
  return (
    <UserWrapper>
      <Header
        title="用户"
      />
      <h2>User</h2>
      <NavBar />
    </UserWrapper>
  );
}

export default User;