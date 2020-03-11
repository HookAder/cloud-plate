import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const TopBar = () => {
  return (
    <div className="topbar">
      <ul>
        <li>
          <NavLink to="/home/files" activeClassName="topbar-active">文件</NavLink>
        </li>
        <li>
          <NavLink to="/home/about" activeClassName="topbar-active">其他</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;