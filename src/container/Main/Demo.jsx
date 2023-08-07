import React, { useEffect } from 'react';

const Screen = ({ backgroundColor }) => (
  <div
    style={{
      height: '100%',
      backgroundColor,
    }}
  />
);

const ScrollPage = () => {
  const numScreens = 3;

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight / numScreens; // Calculate height of each screen
      const threshold = screenHeight / 2; // Threshold for scrolling to the top of a screen

      // Calculate the scroll position at the top of the screen
      const targetScrollY = Math.floor(window.scrollY / screenHeight) * screenHeight + threshold;

      // Start the animation to scroll to the top of the screen
      smoothScrollTo(targetScrollY, 500);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [numScreens]);

  const containerStyle = {
    height: '100vh',
    overflow: 'hidden',
  };

  // Function for smooth scrolling animation
  const smoothScrollTo = (targetY, duration) => {
    const startingY = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (time) => (time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time);

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      const newY = startingY + (targetY - startingY) * easedProgress;

      window.scrollTo(0, newY);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <div style={containerStyle}>
      {Array.from({ length: numScreens }, (_, index) => (
        <Screen
          key={index}
          backgroundColor={index === 0 ? '#ff6347' : index === 1 ? '#66ccff' : '#98fb98'}
        />
      ))}
    </div>
  );
};

export default ScrollPage;
