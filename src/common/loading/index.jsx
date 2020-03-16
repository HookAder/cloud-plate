import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.scss';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className="loding">
      <div className={classes.root}>
        {/* <LinearProgress /> */}
        <LinearProgress color="secondary" />
      </div>
      {/* <header className="header">非清网盘</header> */}
    </div>
  );
}

export default Loading;