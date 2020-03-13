import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import AddIcon from '@material-ui/icons/Add';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Upload, message } from 'antd';
import { actionCreators } from './store';
import './index.scss';

const { confirm } = Modal;



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


const ListItemWrapper = ({ title, path, onDelete }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
      />
      <ListItemSecondaryAction style={{ marginRight: 40 }}>
        <a href={path} download>
          <IconButton edge="end" aria-label="download">
            <DownloadIcon />
          </IconButton>
        </a>
      </ListItemSecondaryAction>
      <ListItemSecondaryAction onClick={() => onDelete(title)}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};


const NoneFolderFiles = () => (
  <div className="none-folder">
    <svg className="icon" aria-hidden="true">
      <use href="#icon-kongwenjianjia"></use>
    </svg><br />
    <span>此文件夹无项目</span>
  </div >
);

const Folder = (props) => {
  const classes = useStyles();
  const { title } = props.location;
  const { activeFilesData } = props;
  const { deleteOne,updateFolderData } = props;

  // 删除确定操作
  function showConfirm(file, folder, index) {
    confirm({
      title: '非清云盘',
      icon: <ExclamationCircleOutlined />,
      content: `你确定要删除这个${file}文件吗?`,
      onOk() {
        deleteOne(file, folder, index);
      },
      onCancel() { },
    });
  }

  // 上传文件
  const updateFile = (folderName) => ({
    name: 'file',
    method: "POST",
    action: `/api/uploadFile?folder=${folderName}`,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
        updateFolderData(folderName);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  })
  return (
    <div className="folder">
      <header>{title ? (
        <React.Fragment>
          <span>{title}</span>
          <div style={{
            position: 'fixed',
            top: 0,
            right: 3,
            marginRight: 40,
            color: '#fff',
            width: '.3rem',
            height: '.3rem',
          }}>
            <Upload {...updateFile(title)}>
              <AddIcon />
            </Upload>
          </div>
        </React.Fragment>
      ) : '默认文件夹'}</header>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List dense={false}>
            {
              activeFilesData.length !== 0 ? (
                activeFilesData.map((file, index) => (
                  <ListItemWrapper
                    key={index}
                    // onDelete={file => deleteOne(file,title)}
                    onDelete={file => showConfirm(file, title, index)}
                    title={file.file}
                    path={file.filesPath} />
                ))
              ) : <NoneFolderFiles />
            }
            <div className="footer-count">总文件：{activeFilesData.length}</div>
          </List>
        </div>
      </Grid>
    </div>
  );
};



const mapStateToProps = state => ({
  activeFilesData: state.get('files').activeFilesData
})

const mapDispatchToProps = dispatch => ({
  deleteOne(file, folder, index) {
    dispatch(actionCreators.initialDeleteOneFiles(file, folder, index));
  },
  updateFolderData(folderName){
    dispatch(actionCreators.initialUpdateFolderData(folderName));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder);