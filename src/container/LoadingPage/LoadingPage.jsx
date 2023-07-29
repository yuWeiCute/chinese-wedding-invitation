import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => (
  <div>
    {/* 这里可以自定义加载页面的样式 */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Loading...</h2>
    </motion.div>
  </div>
);

export default LoadingPage;
