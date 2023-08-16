import React from 'react';

const AppWrap = (Component, idName) => function HOC() {
  const screenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
    width: '100%',
    height: '100vh',
  };

  return (
    <div id={idName} key={idName} data-anchor={idName} style={screenStyle}>
      <Component />
    </div>
  );
};

export default AppWrap;
