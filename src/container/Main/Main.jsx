import React, { useEffect, useRef } from 'react';
import { Navbar } from '../../components';
// import DoubleXi from '../../components/DoubleXi/DoubleXi';

const Main = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const element = mainRef.current;
    if (!element) return;

    const distanceFromTop = element.offsetTop;
    const distanceFromParent = element.parentElement
      ? element.offsetTop - element.parentElement.offsetTop
      : 0;

    console.log('Distance from top:', distanceFromTop);
    console.log('Distance from parent:', distanceFromParent);
  }, []);

  const mainStyle = {
    overflow: 'scroll',
    height: '100%',
    scrollSnapType: 'y proximity',
  };

  const screenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#fff',
    scrollSnapAlign: 'start',
  };

  return (
    <div style={mainStyle} className="main-page app">
      <Navbar />
      {/* 三个画面 */}
      <div ref={mainRef} className="screen" style={{ ...screenStyle, height: '100vh' }}>
        111
        {/* <Header style={{ ...screenStyle }} /> */}
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#66ccff', height: '100vh' }}>
        222
        {/* <About style={{ ...screenStyle }} /> */}
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#98fb98', height: '100vh' }}>
        333
      </div>
    </div>
  );
};

export default Main;
