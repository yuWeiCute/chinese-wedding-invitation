import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const DoubleXi = ({ scrollY, parentValue }) => {
  const topValue = Math.max(parentValue, 10);
  const viewportWidth = window.innerWidth;
  const newY = Math.max(-scrollY, -topValue - 7);
  const newX = Math.max(-scrollY, -viewportWidth * 0.5 + 25);
  const position = { x: newX, y: newY };

  const scale = 1 + (position.x * 0.003) > 0.46 ? 1 + position.x * 0.003 : 0.46;

  return (
    <motion.img
      src={images.doubleXi}
      alt="囍"
      style={{ top: parentValue > 10 ? topValue : 10 }}
      className="picXiStyle"
      initial={{ x: 0, y: 0, scale: 1 }} // 初始缩放比例为1
      animate={{ x: position.x, y: position.y, scale }} // 动画属性包括x、y的位置和scale的缩放
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
};

export default DoubleXi;

