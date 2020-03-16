import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../common/loading';

export default ((component,loading=Loading) => Loadable({
  loader: () => component,
  loading
}));