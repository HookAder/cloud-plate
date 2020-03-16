import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../../../../common/header';
import NavBar from '../../../../common/navBar';
import TopBar from '../../../../common/topBar';

const md = `
## 非清云盘
[项目地址](https://github.com/HookAder/cloud-plate)
***
### 功能
- [x]  登录
- []   ~~注册~~
- []   图片|文件|视频预览功能
- [x]  上传文件
- [x]  下载文件
- [x]  下载文件
- [x]  创建文件夹
- []  删除文件夹

### 详情说明
1. 登录鉴权
2. 采用接口权限JWT(jsonwebtoken)和Express配置
3. API接口的权限认证
`;

const About = () => {
  return (
    <div className="about">
      <Header title="非清网盘" />
      <TopBar />
      <ReactMarkdown source={md}></ReactMarkdown>
      <NavBar />
    </div>
  );
};

export default About;