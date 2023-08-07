import React from 'react';
// import React, { useRef } from 'react';
import DoubleXi from '../components/DoubleXi/DoubleXi';
import Music from '../components/Music/Music';
import Main from './Main/Main';
// import ScrollListener from './ScrollListener/ScrollListener';

const mainStyle = {
  overflow: 'scroll',
  height: '100%',
  width: '100%',
};

const MainPage = () => (
  <div style={mainStyle}>
    <Music />
    <DoubleXi />
    <Main />
  </div>
);
export default MainPage;
