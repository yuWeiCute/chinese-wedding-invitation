import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';

const MainPage = () => {
  const numScreens = 3;
  const { scrollYProgress } = useViewportScroll();
  const screenRange = 1 / (numScreens - 1);
  const y = useTransform(scrollYProgress, [0, screenRange, 2 * screenRange], [0, 0, -(numScreens - 1)]);
  const springConfig = { damping: 25, stiffness: 300 };
  const springY = useSpring(y, springConfig);

  // 用于保存当前滚动到的画面索引
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    // 监听scrollYProgress的变化，并在滚动时判断是否需要吸附到下一个画面的顶端
    const unsubscribeY = y.onChange((value) => {
      const index = Math.round(-value);
      if (index !== currentScreenIndex) {
        setCurrentScreenIndex(index);
      }
    });

    return () => {
      unsubscribeY();
    };
  }, [y, currentScreenIndex]);

  useEffect(() => {
    // 监听currentScreenIndex的变化，并在滚动时更新springY的值以实现吸附效果
    if (currentScreenIndex < numScreens - 1) {
      const nextScreenProgress = -y.get() - currentScreenIndex;
      if (nextScreenProgress > 0.5) {
        // 如果滚动进度超过下一个画面范围的一半，则自动吸附到下一个画面的顶端
        springY.set(-(currentScreenIndex + 1));
      } else {
        // 否则，自动吸附到当前画面的顶端
        springY.set(-currentScreenIndex);
      }
    }
  }, [currentScreenIndex, numScreens, springY, y]);

  const mainStyle = {
    overflow: 'scroll',
    height: '100vh',
    scrollSnapType: 'y mandatory',
    y: springY,
  };

  const screenStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#fff',
    scrollSnapAlign: 'start',
  };

  return (
    <motion.div style={mainStyle} className="main-page">
      {/* 三个画面 */}
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#ff6347' }}>
        第一个画面
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#66ccff' }}>
        第二个画面
      </div>
      <div className="screen" style={{ ...screenStyle, backgroundColor: '#98fb98' }}>
        第三个画面
      </div>
    </motion.div>
  );
};

export default MainPage;
