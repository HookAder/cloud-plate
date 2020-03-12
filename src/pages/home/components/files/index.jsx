import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';
import { actionCreators } from './store';
import {
  FilesWrapper,
  FilesList,
  FilesItem
} from "./style";
import siteConfig from '../../../../config/site.json';

const FilesOnfolder = ({ to, title,onClick, ...rest }) => {
  return (
    <FilesItem onClick={() => onClick(title)}>
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
  const { initialFolderData,openFolderData } = props;

  useEffect(() => {
    const init = () => initialFolderData();
    init();
  },[]);

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
            <FilesOnfolder
              key={index}
              onClick={title => openFolderData(title)}
              to={{
                pathname: `${match.url}/${file}`,
                data: file
              }}
              title={file} />
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
  initialFolderData(){
    dispatch(actionCreators.initFolderData());
  },
  openFolderData(folderName){
    dispatch(actionCreators.openFolderData(folderName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files);