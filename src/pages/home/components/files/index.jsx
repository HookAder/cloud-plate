import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';
import {
  FilesWrapper,
  FilesList,
  FilesItem
} from "./style";
const Files = () => {
  return (
    <div className="files">
      <Header title="非清网盘" />
      <TopBar />
      <FilesWrapper>
        <FilesList>
          <FilesItem>
            <Link to="/home/files">
              <svg className="icon" aria-hidden="true">
                <use href="#icon-files1"></use>
              </svg>
              <span>文件夹</span>
            </Link>
          </FilesItem>
          <FilesItem>
            <Link to="/home/files">
              <svg className="icon" aria-hidden="true">
                <use href="#icon-files1"></use>
              </svg>
              <span>文件夹</span>
            </Link>
          </FilesItem>
          <FilesItem>
            <Link to="/home/files">
              <svg className="icon" aria-hidden="true">
                <use href="#icon-files1"></use>
              </svg>
              <span>文件夹</span>
            </Link>
          </FilesItem>
          <FilesItem>
            <Link to="/home/files">
              <svg className="icon" aria-hidden="true">
                <use href="#icon-files1"></use>
              </svg>
              <span>文件夹</span>
            </Link>
          </FilesItem >
        </FilesList >
      </FilesWrapper >
      <NavBar />
    </div >
  );
};

export default Files;