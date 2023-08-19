import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  // const scrollableRef = useRef(null);
  const videoRef = useRef(null);

  // const handleMouseMove = () => {
  //   console.log('1111');
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoRef.current.play();
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 元素50%以上进入视口时触发
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);
    // 监听鼠标移动事件
    // const scrollableElement = scrollableRef.current;
    // console.log(videoRef.current);
    // document.addEventListener('mousemove', handleMouseMove);
    // scrollableElement.addEventListener('scroll', handleMouseMove);

    // 清理函数，在组件卸载时移除事件监听
    return () => {
      observer.disconnect();
      // document.removeEventListener('mousemove', handleMouseMove);
      // scrollableElement.removeEventListener('scroll', handleMouseMove);
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
          // autoPlay
          muted
          loop
          playsInline
          controls
          width="100%"
          height="100%"
          poster={images.Gwgvv}
          preload="auto"
        >
          <source src="https://video-1318392306.cos.ap-shanghai.myqcloud.com/2db0da47553066615ca955112f5b812e.mp4" type="video/mp4" />
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

