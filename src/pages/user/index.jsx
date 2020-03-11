import React from 'react';
import Header from '../../common/header';
import NavBar from '../../common/navBar';
import './index.scss';
import './style';

const User = () => {
  return (
    <div className="user">
      <Header
        is={true}
        title="用户"
      />
      <h1>我的</h1>
      <NavBar />
    </div>
  );
}

export default User;