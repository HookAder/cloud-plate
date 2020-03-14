import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { load } from 'jinrishici';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../common/header';
import NavBar from '../../common/navBar';
import {
  UserWrapper
} from './style';
import './index.scss';
import './style';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    margin: 'auto'
  },
});

const FolderListItem = ({ title, len }) => (
  <li>
    <b>{title ? title : '默认标题'}</b>
    <svg className="icon" aria-hidden="true">
      <use href="#icon-files"></use>
    </svg>
    <span>{len ? len : '无'}</span>
  </li>
)

const User = (props) => {
  const { folderLen } = props;
  const classes = useStyles();
  const [poems,setPoems] = useState('');
  useEffect(() => {
    // 获取今日诗词
    load(result => {
      setPoems(result.data.content);
    })
  },[])

  return (
    <UserWrapper>
      <Header
        title="用户"
      />
      <div className="user-folder-list">
        <ul>
          <FolderListItem title="总文件夹" len={folderLen} />
          <FolderListItem title="默认文件夹" />
        </ul>
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            image="https://api.dujin.org/bing/1920.php"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              沉鱼落木
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {poems}
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent:'center'}}>
          <a href="https://www.inlc.top/" target="_blank">
            <Button size="small" color="primary">
              我的网站
            </Button>
          </a>
          <a href="https://www.inlc.top/?page_id=78" target="_blank">
            <Button size="small" color="primary">
            我的项目
            </Button>
          </a>
        </CardActions>
      </Card>
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