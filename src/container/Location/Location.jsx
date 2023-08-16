import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import { Map, Marker } from 'react-amap';
// import DoubleXi from '../../components/DoubleXi';
// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Location.scss';
import Flower from '../../components/Flowers/Flower';
import flowerRed from '../../components/Flowers/flowerRed.png';
import flowerWhite from '../../components/Flowers/flowerWhite.png';
import flowerYellow from '../../components/Flowers/flowerYellow.png';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Location = () => {
  const latitude = 28.678541;
  const longitude = 115.805838;
  const mapCenter = { longitude: 115.805838, latitude: 28.678541 };
  const markerPosition = { longitude: 115.805838, latitude: 28.678541 };
  const mapPlugins = ['ToolBar'];

  const openMapApp = () => {
    const mapUrl = `https://uri.amap.com/marker?position=${longitude},${latitude}&name=标注位置&src=e65f9f97072c92b72bcd6aef75936b25`;
    window.location.href = mapUrl;
  };

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

  return (
    <div ref={scrollableRef} className="app__location app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__location-img"
      >
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__location-circles"
        >
          <div className="circle-cmp" style={{ zIndex: '99', width: '18%', bottom: '-3%', left: '-6%' }}>
            <Flower rotationSpeed={20} imageUrl={flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '27%', bottom: '2%', left: '-12%' }}>
            <Flower rotationSpeed={25} imageUrl={flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '16%', left: '-3%' }}>
            <Flower rotationSpeed={30} imageUrl={flowerWhite} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '25%', top: '-10%', right: '-15%' }}>
            <Flower rotationSpeed={20} imageUrl={flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '30%', bottom: '10%', right: '-15%' }}>
            <Flower rotationSpeed={25} imageUrl={flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '12%', right: '-5%' }}>
            <Flower rotationSpeed={30} imageUrl={flowerWhite} />
          </div>
        </motion.div>
        <motion.div
          style={{ zIndex: 3, width: '100%', height: '100%' }}
          key={images.profile} // 确保 key 值在切换图片时更新
          src={images.profile}
          alt="profile_bg"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delayChildren: 0.5 }}
          // initial={{ opacity: 0 }} // 初始透明度
          // animate={{ opacity: 1 }} // 最终透明度
          // exit={{ opacity: 0 }} // 图片切换时淡出效果
          // transition={{ duration: 1 }}
        >
          <Map mapStyle="fresh" plugins={mapPlugins} center={mapCenter} zoom={6}>
            <Marker position={markerPosition} events={{ click: openMapApp }} />
          </Map>
        </motion.div>
      </motion.div>
      <BsChevronDown />
      <div className="circle-container" />
      <h2 className="head-text">陈曦 & 江宇薇</h2>
      <p className="bold-text">2023 年 9 月 16 日</p>
      <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p>
      <p className="bold-text">静待光临</p>
    </div>
  );
};

export default Location;

