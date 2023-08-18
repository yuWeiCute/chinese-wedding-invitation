import React from 'react';
import { motion } from 'framer-motion';
import './LoadingPage.scss';

const LoadingPage = ({ loadingProgress }) => {
  // const containerStyle = {
  //   height: '100vh',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  //   fontSize: '3rem',
  //   color: '#000',
  // };

  const progressBarStyle = {
    width: '50%', // 初始宽度
    height: '20px',
    backgroundColor: '#c16f6e',
    overflow: 'hidden',
  };

  const progressStyle = {
    width: `${loadingProgress}%`, // 根据loadingProgress动态更新进度条的宽度
    height: '100%',
    backgroundColor: '#91322a',
  };

  return (
    <div className="loading">
      <div className="loading-text">
        <span className="loading-text-words">L</span>
        <span className="loading-text-words">O</span>
        <span className="loading-text-words">A</span>
        <span className="loading-text-words">D</span>
        <span className="loading-text-words">I</span>
        <span className="loading-text-words">N</span>
        <span className="loading-text-words">G</span>
      </div>
      {/* 显示loading进度条 */}
      <div style={progressBarStyle}>
        <motion.div style={progressStyle} />
      </div>
    </div>
  );
};

export default LoadingPage;
