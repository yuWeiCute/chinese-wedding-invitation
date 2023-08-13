import React, { useEffect, useRef } from 'react';
// import { Navbar } from '../../components';
import Header from '../Header/Header';
import Record from '../Record/Record';
import Footer from '../Footer/Footer';
import Date from '../Date/Date';
// import Testimonial from '../Testimonial/Testimonial';
import Location from '../Location/Location';

const Main = () => {
  const mainRef = useRef(null);

  const scrollableRef = useRef(null);

  const handleScroll = () => {
    const scrollDistance = scrollableRef.current.scrollTop; // 获取元素内部的滚动距离
    console.log('Scroll distance:', scrollDistance);
    // 在这里执行其他操作，根据滚动距离进行相应的处理
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    scrollableElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    scrollSnapType: 'y proximity',
  };

  const screenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#fff',
    scrollSnapAlign: 'start',
  };

  return (
    <div ref={scrollableRef} style={mainStyle} className="main-page app">
      {/* <Navbar /> */}
      {/* 三个画面 */}
      <div ref={mainRef} className="screen" style={{ ...screenStyle, height: '100%' }}>
        {/* 111 */}
        <Header className="screen" />
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#66ccff', height: '100vh' }}>
        {/* 222 */}
        <Record />
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#98fb98', height: '100vh' }}>
        <Location />
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#68fb98', height: '100vh' }}>
        <Date />
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#38fb98', height: '100vh' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
