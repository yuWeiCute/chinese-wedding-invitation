import React, { useEffect, useRef, useState } from 'react';
// import { Navbar } from '../../components';
import { motion } from 'framer-motion';
import './Main.scss';
import Header from '../Header/Header';
import Record from '../Record/Record';
import Footer from '../Footer/Footer';
import Date from '../Date/Date';
// import Testimonial from '../Testimonial/Testimonial';
import Location from '../Location/Location';
import Xi from './doubXi.gif';
import NavigationDots from '../../components/NavigationDots.jsx';

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mainRef = useRef(null);

  const scrollableRef = useRef(null);

  const [sections] = useState(['home', 'about', 'date', 'location', 'contact']);
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const handleScroll = () => {
    // const scrollDistance = scrollableRef.current.scrollTop; // 获取元素内部的滚动距离
    // console.log('Scroll distance:', scrollDistance);
    // 在这里执行其他操作，根据滚动距离进行相应的处理
    // 使用requestAnimationFrame优化更新频率
    requestAnimationFrame(() => {
      const scrollY = scrollableRef.current.scrollTop;
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

  const handleScroll2 = () => {
    console.log('11111');
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
    handleScroll2(); // Initialize the current section based on the initial scroll position

    scrollableElement.addEventListener('scroll', handleScroll2);
    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
      scrollableElement.removeEventListener('scroll', handleScroll2);
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

  const scale = 1 + (position.y * 0.001) > 0.5 ? 1 + position.y * 0.003 : 0.5;
  // useEffect(() => {
  //   const element = mainRef.current;
  //   if (!element) return;

  //   const distanceFromTop = element.offsetTop;
  //   const distanceFromParent = element.parentElement
  //     ? element.offsetTop - element.parentElement.offsetTop
  //     : 0;

  //   console.log('Distance from top:', distanceFromTop);
  //   console.log('Distance from parent:', distanceFromParent);
  // }, []);

  const mainStyle = {
    overflow: 'scroll',
    height: '100vh',
    // scrollSnapType: 'y proximity',
    scrollSnapType: 'y mandatory',
  };

  const screenStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#fff',
    scrollSnapAlign: 'start',
  };

  return (
    <div>
      <motion.img
        src={Xi}
        alt="Flower Red"
        style={{ ...containerStyle }}
        initial={{ x: 0, y: 0, scale: 1 }} // 初始缩放比例为1
        animate={{ x: position.x, y: position.y, scale }} // 动画属性包括x、y的位置和scale的缩放
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
      <NavigationDots active={currentSection} />
      <div ref={scrollableRef} style={mainStyle} className="main-page app">
        {/* <Navbar /> */}
        {/* 三个画面 */}
        <div
          key="div1"
          id="home"
          data-anchor="div1"
          ref={mainRef}
          className="screen"
          style={{ ...screenStyle, height: '100%' }}
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
          <Record />
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
