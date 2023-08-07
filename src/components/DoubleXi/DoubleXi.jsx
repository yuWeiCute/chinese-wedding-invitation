import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Xi from './doubXi.gif'; // 替换成正确的PNG图像路径

const DoubleXi = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 获取页面滚动位置，并更新组件的位置
  const handleScroll = () => {
    // 使用requestAnimationFrame优化更新频率
    requestAnimationFrame(() => {
      const { scrollY } = window;
      //   const pageHeight = document.documentElement.scrollHeight;
      //   console.log('pageHeight', pageHeight);
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      // console.log('viewportHeight', viewportHeight);
      // const maxY = Math.max(0, pageHeight - viewportHeight);
      const newY = Math.max(-scrollY, -viewportHeight * 0.2);
      const newX = Math.max(-scrollY, -viewportWidth * 0.5 + 40);
      setPosition({ x: newX, y: newY });
    });
  };

  useEffect(() => {
    // 监听页面滚动事件
    window.addEventListener('scroll', handleScroll);

    return () => {
      // 在组件卸载时移除滚动事件监听
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: '20%',
    left: '50%',
    marginLeft: '-40px', // 通过负边距使得图片在中间
    width: '80px',
    height: '80px',
    zIndex: '99',
  };

  // 计算图片缩放比例，随着滚动逐渐变小
  const scale = 1 + (position.y * 0.001) > 0.5 ? 1 + position.y * 0.003 : 0.5;

  return (
    <motion.img
      src={Xi}
      alt="Flower Red"
      style={{ ...containerStyle }}
      initial={{ x: 0, y: 0, scale: 1 }} // 初始缩放比例为1
      animate={{ x: position.x, y: position.y, scale }} // 动画属性包括x、y的位置和scale的缩放
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
};

export default DoubleXi;
