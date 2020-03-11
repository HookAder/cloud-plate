import React,{ useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Vcode from 'react-vcode';
import message from 'antd/lib/message'
import { actionCreators } from './store';
import './index.scss';
import './style';
import siteConfig from '../../config/site.json';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <span color="inherit">非清网盘</span>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Home = (props) => {
  const { user, pass,vcodeText,vcodeLen } = props;
  const { initFormValue, initLogin } = props;
  const classes = useStyles();
  const [code,setCode] = useState(vcodeText);

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{siteConfig.site}</Typography>
          <form
            noValidate
            className={classes.form}
          >
            <TextField
              onChange={e => initFormValue(e.target.value, e.target.name)}
              value={user}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="账号"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              value={pass}
              onChange={e => initFormValue(e.target.value, e.target.name)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              value={vcodeText}
              onChange={e => initFormValue(e.target.value, e.target.name)}
              style={{width: '55%',float: 'left'}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="vcodeText"
              label="验证码"
              type="vcode"
              id="vcodeText"
              autoComplete="current-password"
            />
            <Vcode
              length={vcodeLen}
              style={{float: 'right',marginTop: 23}}
              onChange={vcode => setCode(vcode)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit,'animated bounceInLeft'}
              // className="animated bounceInLeft"
              style={{marginTop: 20}}
              onClick={() => initLogin({user,pass,vcodeText,code})}
            >登录</Button>
          </form>
        </div>
        <Box mt={6}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.getIn(['login', 'username']),
  pass: state.getIn(['login', 'password']),
  vcodeText: state.getIn(['login','vcodeText']),
  vcodeLen: state.getIn(['login','vcodeLength'])
});

const mapDispatchToProps = dispatch => ({
  initFormValue(value, name) {
    dispatch(actionCreators.initiaChangeFormValue(value, name));
  },
  initLogin(formData) {
    const { user,pass,vcodeText,code } = formData;
    if(!user || !pass || !vcodeText){
      message.error('账号密码或验证码为空!',.8);
      return;
    }
    if(vcodeText !== code){
      message.warn('验证码输入错误,请重试!',.8);
      return;
    }
    dispatch(actionCreators.initialLoginAPP(user,pass));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);