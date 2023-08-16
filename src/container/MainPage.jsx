import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Main.scss';
import './App.scss';
import { Navbar, Music, SocialMedia, NavigationDots } from '../components';
import { Header, About, Footer, Date, Location } from './index';
import Xi from './doubXi.gif';

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const mainRef = useRef(null);
  const scrollableRef = useRef(null);

  const [sections] = useState(['home', 'about', 'date', 'location', 'contact']);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const scrollY = scrollableRef.current.scrollTop;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const newY = Math.max(-scrollY, -viewportHeight * 0.06 - 5);
      const newX = Math.max(-scrollY, -viewportWidth * 0.5 + 25);
      setPosition({ x: newX, y: newY });
    });
  };

  const handlePageID = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
        setCurrentSection(sections[i]);
        // eslint-disable-next-line no-restricted-globals
        history.replaceState(null, null, `#${sections[i]}`);
        break;
      }
    }
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    scrollableElement.addEventListener('scroll', handleScroll);
    handlePageID(); // Initialize the current section based on the initial scroll position

    scrollableElement.addEventListener('scroll', handlePageID);
    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
      scrollableElement.removeEventListener('scroll', handlePageID);
    };
  }, []);

  const PicXiStyle = {
    position: 'fixed',
    top: '6%',
    left: '50%',
    marginLeft: '-30px', // 通过负边距使得图片在中间
    width: '60px',
    height: '60px',
    zIndex: '120',
  };

  const scale = 1 + (position.y * 0.012) > 0.05 ? 1 + position.y * 0.012 : 0.05;

  const mainStyle = {
    overflow: 'scroll',
    height: '100vh',
    // scrollSnapType: 'y proximity',
    scrollSnapType: 'y mandatory',
  };

  const screenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
  };

  return (
    <div>
      <motion.img
        src={Xi}
        alt="囍"
        style={PicXiStyle}
        initial={{ x: 0, y: 0, scale: 1 }} // 初始缩放比例为1
        animate={{ x: position.x, y: position.y, scale }} // 动画属性包括x、y的位置和scale的缩放
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
      <NavigationDots active={currentSection} />
      <Navbar />
      <Music />
      <SocialMedia />
      <div ref={scrollableRef} style={mainStyle} className="app">
        {/* <Navbar /> */}
        {/* 三个画面 */}
        <div
          key="div1"
          id="home"
          data-anchor="div1"
          className="screen"
          style={{ ...screenStyle, height: '100vh' }}
        >
          {/* 111 */}
          <Header className="screen" />
        </div>
        <div
          key="div2"
          id="about"
          data-anchor="div2"
          className="screen"
          style={{ ...screenStyle, height: '100vh' }}
        >
          {/* 222 */}
          <About />
        </div>
        <div
          key="div3"
          id="date"
          data-anchor="div3"
          className="screen"
          style={{ ...screenStyle, height: '100vh' }}
        >
          <Date />
        </div>
        <div className="screen" id="location" style={{ ...screenStyle, height: '100vh' }}>
          <Location />
        </div>
        <div className="screen" id="contact" style={{ ...screenStyle, height: '100vh' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;

