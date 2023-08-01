import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = ({ loadingProgress }) => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '3rem',
    color: '#000',
  };

  const progressBarStyle = {
    width: '50%', // 初始宽度
    height: '20px',
    backgroundColor: '#ccc',
    overflow: 'hidden',
  };

  const progressStyle = {
    width: `${loadingProgress}%`, // 根据loadingProgress动态更新进度条的宽度
    height: '100%',
    backgroundColor: '#4caf50',
  };

  return (
    <div style={containerStyle}>
      <h2>Loading...</h2>
      {/* 显示loading进度条 */}
      <div style={progressBarStyle}>
        <motion.div style={progressStyle} />
      </div>
    </div>
  );
};

export default LoadingPage;
