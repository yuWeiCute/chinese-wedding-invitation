// ParentComponent.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';

const ParentComponent = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header sticky={scrollTop < window.innerHeight / 2} />
      <About />
      <Footer />
    </>
  );
};

export default ParentComponent;
