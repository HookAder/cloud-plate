import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const Folder = (props) => {
  const { data } = props.location;
  const { activeFilesData } = props;

  console.log(activeFilesData);
  return (
    <div className="folder">
      <header>文件夹</header>
    </div>
  );
};


const mapStateToProps = state => ({
  activeFilesData: state.get('files').activeFilesData
})

export default connect(
  mapStateToProps,
  null
)(Folder);