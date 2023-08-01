import React from 'react';
import { motion } from 'framer-motion';

import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Testimonial from './Testimonial/Testimonial';
import Work from './Work/Work';

import { Navbar } from '../components';

const MainPage = () => {
  const mainStyle = {
    overflow: 'scroll !important',
    scrollSnapType: 'y mandatory !important',
  };

  const screenStyle = {
    scrollSnapAlign: 'start !important',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="app"
    >
      {/* 这里放主页面的内容 */}
      <Navbar style={mainStyle} />
      <div>
        <Header style={{ ...screenStyle }} />
        <About style={{ ...screenStyle }} />
        <Work style={{ ...screenStyle }} />
        <Skills style={{ ...screenStyle }} />
        <Testimonial style={{ ...screenStyle }} />
        <Footer style={{ ...screenStyle }} />
      </div>
    </motion.div>
  );
};

export default MainPage;
