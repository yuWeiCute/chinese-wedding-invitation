import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Navbar, Music, SocialMedia, NavigationDots, DoubleXi } from '../components';
import { Header, About, Footer, Date, Location } from './index';

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollableRef = useRef(null);

  const [sections] = useState(['home', 'about', 'date', 'location', 'contact']);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const [parentValue, setParentValue] = useState(null);

  const handleChildValueChange = (newValue) => {
    setParentValue(newValue);
    console.log(parentValue);
  };

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const newY = scrollableRef.current.scrollTop;
      setScrollY(newY);
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

  console.log(parentValue);
  useEffect(() => {
    console.log(parentValue);
    const scrollableElement = scrollableRef.current;
    scrollableElement.addEventListener('scroll', handleScroll);
    handlePageID(); // Initialize the current section based on the initial scroll position
    scrollableElement.addEventListener('scroll', handlePageID);
    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
      scrollableElement.removeEventListener('scroll', handlePageID);
    };
  }, []);

  const mainStyle = {
    overflow: 'scroll',
    height: '100vh',
    // scrollSnapType: 'y proximity',
    scrollSnapType: 'y mandatory',
  };

  return (
    <>
      <div className="centered-square" />
      <NavigationDots active={currentSection} />
      <Navbar />
      <Music />
      {/* <p>Value from child: {parentValue}</p> */}
      <SocialMedia />
      <div ref={scrollableRef} style={mainStyle} className="app">
        <Header onChildValueChange={handleChildValueChange} />
        <About />
        <Date />
        <Location />
        <Footer />
      </div>
      {parentValue && <DoubleXi scrollY={scrollY} parentValue={parentValue} />}
    </>
  );
};

export default Main;

