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
- [x]  上传文件
- [x]  下载文件
- [x]  下载文件
- [x]  创建文件夹
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