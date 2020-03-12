import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import message from 'antd/lib/message';
import { actionCreators } from './store';
import './index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
}));

const HeaderAddFolder = ({ is, addFolder }) => {
  const [folder, setFolder] = useState('');

  const handleClick = () => {
    if(folder === '' || !folder){
      return message.error('请输入文件夹');
    }
    addFolder(folder);
    setFolder('');
  }
  return (
    <div
      className="header-add-folder animated slideInDown"
      // className="header-add-folder"
      style={{ display: is }}
    >
      <header>创建文件夹</header>
      <TextField
        id="standard-basic"
        label="folder"
        value={folder.title}
        onChange={e => setFolder(e.target.value)} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10 }}
        onClick={handleClick}
      >提交</Button>
    </div>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState('none');
  const { type, title } = props;
  const { submitAddFolder } = props;
  const handleToggle = () => {
    if (toggle === 'none') {
      setToggle('block');
    } else {
      setToggle('none');
    }
  }

  // 提交创建文件夹
  const handleSubmitAddFolder = folder => {
    submitAddFolder(folder);
    setToggle('none');
  }

  return (
    <div className={classes.root}>
      <HeaderAddFolder is={toggle} addFolder={folder => handleSubmitAddFolder(folder)} />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>{title}</Typography>
          {type === 'add' && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggle}
              >
                <AddIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string
}

Header.defaultProps = {
  is: 'add',
  title: '默认标题'
}


const mapDispatchToProps = dispatch => ({
  submitAddFolder(folder) {
    dispatch(actionCreators.createSubmitAddFolder(folder));
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Header);