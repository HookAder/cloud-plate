import React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';
import {
  FilesWrapper,
  FilesList,
  FilesItem
} from "./style";
import siteConfig from '../../../../config/site.json';

const FilesOnfolder = ({ to, title, ...rest }) => {
  return (
    <FilesItem>
      <Link to={to} {...rest}>
        <svg className="icon" aria-hidden="true">
          <use href="#icon-files1"></use>
        </svg>
        <span>{title ? title : '默认文件夹'}</span>
      </Link>
    </FilesItem>
  );
}

const Files = props => {
  const match = useRouteMatch();
  const { filesFolder } = props;
  return (
    <div className="files">
      <Header
        title={siteConfig.site}
        type="add"
      />
      <TopBar />
      <FilesWrapper>
        <FilesList>
          {filesFolder.map((file, index) => (
            <FilesOnfolder key={index} to={`${match.url}/${file.title}`} title={file.title} />
          ))}
        </FilesList>
      </FilesWrapper>
      <NavBar />
    </div >
  );
};

const mapStateToProps = state => ({
  filesFolder: state.get('files').filesFolder
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files);