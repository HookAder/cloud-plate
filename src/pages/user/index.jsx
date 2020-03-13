import React from 'react';
import { connect } from 'react-redux';
import Header from '../../common/header';
import NavBar from '../../common/navBar';
import {
  UserWrapper
} from './style';
import './index.scss';
import './style';

const User = (props) => {
  const { folderLen } = props;
  return (
    <UserWrapper>
      <Header
        title="用户"
      />
      <div className="user-folder-list">
        <ul>
          <li>
            <b>总文件夹</b>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-files"></use>
            </svg>
            <span>{folderLen ? folderLen : '无'}</span>
          </li>
          {/* <li>
            <b>总文件夹</b>
            <svg class="icon" aria-hidden="true">
              <use href="#icon-files"></use>
            </svg>
            <span>{folderLen}</span>
          </li> */}
        </ul>
      </div >
      <NavBar />
    </UserWrapper >
  );
}


const mapStateToProps = state => ({
  folderLen: state.get('files').filesFolder.length
})

export default connect(
  mapStateToProps,
  null
)(User);