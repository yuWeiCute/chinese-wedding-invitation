import React from 'react';
// import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';

// import React from 'react';
// import { motion } from 'framer-motion';

// import DoubleXi from '../../components/DoubleXi';

const Main = React.forwardRef((props, ref) => {
  const mainStyle = {
    // position: 'absolute',
    overflow: 'scroll',
    height: '100%',
    scrollSnapType: 'y proximity',
  };

  const screenStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#fff',
    scrollSnapAlign: 'start',
  };

  return (
    <div ref={ref} style={mainStyle} className="main-page app">
      {/* <DoubleXi /> */}
      {/* 三个画面 */}
      <div className="screen" style={{ ...screenStyle }}>
        111
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#66ccff' }}>
        222
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#98fb98' }}>
        333
      </div>
    </div>
  );
});

export default Main;
