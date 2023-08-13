import React from 'react';
import { motion } from 'framer-motion';

const Flower = ({ rotationSpeed, imageUrl }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // 保持原始图片比例
  };

  return (
    <motion.div
      style={containerStyle}
      animate={{ rotate: 360 }} // 旋转动画，绕中心点旋转360度
      transition={{ loop: Infinity, ease: 'linear', duration: rotationSpeed }} // 使用父组件传递的旋转速度
    >
      <img src={imageUrl} alt="Rotating Flower" style={imageStyle} />
    </motion.div>
  );
};

export default Flower;
