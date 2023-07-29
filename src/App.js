import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { About, Footer, Header, Skills, Testimonial, Work, LoadingPage } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  // 模拟加载过程，这里使用useEffect来模拟加载完成后的效果
  useEffect(() => {
    // 模拟加载过程，1秒后设置loading为false，表示加载完成
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // 清除计时器
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingPage />;
  }

  // 加载完成后显示主页面
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 这里放主页面的内容 */}
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </motion.div>
  );
};

export default App;
