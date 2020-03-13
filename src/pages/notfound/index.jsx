import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const NotFound = (props) => {
  const classes = useStyles();
  
  useEffect(() => {
    let timer = null;
    timer = setTimeout(() => {
      props.history.replace('/home');
    }, 3000)
    return () => timer = null;
  }, []);

  return (
    <div className="not-found">
      <h1>非清网盘提示</h1>
      <h3>抱歉，您所访问的页面不存在...</h3>
      <div className={classes.root} style={{justifyContent: 'center'}}>
        <CircularProgress/>
      </div>
      <svg className="icon" aria-hidden="true">
        <use href="#icon-icon-test"></use>
      </svg><br />
      <Link to="/home">返回首页</Link>
    </div>
  );
};

export default NotFound;