import React from 'react';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';

const Files = () => {
  return (
    <div className="files">
      <Header
        title="非清网盘"
      />
      <TopBar />
      <h1>文件</h1>
      <NavBar />
    </div>
  );
};

export default Files;