// import React, { Suspense } from 'react';
import React, { useRef, useEffect } from 'react';
// import React from 'react';
import { motion } from 'framer-motion';
// import { BsChevronDown } from 'react-icons/bs';
// import DoubleXi from '../../components/DoubleXi';
// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
import './Record.scss';
// import weddingVideo from './wedding.mp4';
// import LazyVideo from '../../components/Video/Video';
// import Flower from '../../components/Flowers/Flower';
// import flowerRed from '../../components/Flowers/flowerRed.png';
// import flowerWhite from '../../components/Flowers/flowerWhite.png';
// import flowerYellow from '../../components/Flowers/flowerYellow.png';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

const Record = () => {
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
    <div className="app__record app__flex">
      {/* <video controls autoPlay width="340" height="360">
      <source src={weddingVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
      {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__record-img"
    > */}
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
          poster="https://streamja.com/i/gw/Gwgvv.jpg"
        >
          <source src="https://sloth.cdnja.co/v/gw/Gwgvv.mp4" type="video/mp4" />
          {/* <track kind="captions" /> */}
          Your browser does not support the video tag.
        </video>
      </motion.div>
      {/* <video src={weddingVideo} controls></video> */}
      {/* <Suspense fallback={<div>Loading video...</div>}>
        <LazyVideo />
      </Suspense> */}
      {/* <img style={{ zIndex: '10' }} src={images.profile} alt="profile_bg" /> */}
      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__record-circles"
      >
        <div className="circle-cmp" style={{ zIndex: '99', width: '18%', top: '6%', left: '19%' }}>
          <Flower rotationSpeed={20} imageUrl={flowerRed} />
        </div>
        <div className="circle-cmp" style={{ zIndex: '1', width: '40%', top: '5%', left: '-10%' }}>
          <Flower rotationSpeed={25} imageUrl={flowerYellow} />
        </div>
        <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '19%', left: '12%' }}>
          <Flower rotationSpeed={30} imageUrl={flowerWhite} />
        </div>

        <div className="circle-cmp" style={{ zIndex: '99', width: '36%', bottom: '-5%', right: '-5%' }}>
          <Flower rotationSpeed={20} imageUrl={flowerRed} />
        </div>
        <div className="circle-cmp" style={{ zIndex: '1', width: '28%', bottom: '20%', right: '-8%' }}>
          <Flower rotationSpeed={25} imageUrl={flowerYellow} />
        </div>
        <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '0%', right: '30%' }}>
          <Flower rotationSpeed={30} imageUrl={flowerWhite} />
        </div>
      </motion.div> */}
      {/* </motion.div> */}
      {/* <BsChevronDown /> */}
      {/* <div className="circle-container" /> */}
      <br />
      <h2 className="head-text">彩线牵缘幸会初</h2>
      <h2 className="head-text">笑看流年岁月添</h2>
      <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p>
      <p className="bold-text">静待光临</p>
    </div>
  );
};
export default Record;

