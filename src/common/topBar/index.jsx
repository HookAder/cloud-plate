import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const TopBar = () => {
  return (
    <div className="topbar">
      <ul>
        <li>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-files"></use>
          </svg>
          <NavLink to="/home/files" activeClassName="topbar-active animated headShake">文件</NavLink>
        </li>
        <li>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-qita"></use>
          </svg>
          <NavLink to="/home/about" activeClassName="topbar-active animated headShake">说明</NavLink>
        </li>
      </ul>
    </div >
  );
}

export default TopBar;