import React from 'react';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';

const About = () => {
  return (
    <div className="about">
      <Header title="非清网盘" />
      <TopBar />
      <h1>说明</h1>
      <NavBar />
    </div>
  );
};

export default About;