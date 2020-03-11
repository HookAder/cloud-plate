import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import UserIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
});

const NavBar = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('home');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction label="首页" value="home" icon={<Link to="/home/files"><FolderIcon /></Link>} />
      <BottomNavigationAction label="我的" value="user" icon={<Link to="/user"><UserIcon /></Link>} />
    </BottomNavigation>
  );
}

export default NavBar;