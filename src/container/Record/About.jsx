import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const videoRef = useRef(null);

  const handleMouseMove = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // 监听鼠标移动事件
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleMouseMove);

    // 清理函数，在组件卸载时移除事件监听
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.5 }}
        className="app__record-video"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
          poster={images.Gwgvv}
        >
          <source src="https://11111video-1318392306.cos.ap-shanghai.myqcloud.com/2db0da47553066615ca955112f5b812e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <br />
      <h2 className="head-text">彩线牵缘幸会初</h2>
      <h2 className="head-text">笑看流年岁月添</h2>
      {/* <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p> */}
      {/* <p className="light-text">静待光临</p> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About),
  'about',
);

