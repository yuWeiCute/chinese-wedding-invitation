import React from 'react';
import { motion } from 'framer-motion';
import { Map, Marker } from 'react-amap';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { Flower } from '../../components';
import './Location.scss';

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

  return (
    <>
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
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '27%', bottom: '2%', left: '-12%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', bottom: '16%', left: '-3%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '25%', top: '-10%', right: '-15%' }}>
            <Flower rotationSpeed={20} imageUrl={images.flowerRed} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '0', width: '30%', bottom: '10%', right: '-15%' }}>
            <Flower rotationSpeed={25} imageUrl={images.flowerYellow} />
          </div>
          <div className="circle-cmp" style={{ zIndex: '99', width: '10%', top: '12%', right: '-5%' }}>
            <Flower rotationSpeed={30} imageUrl={images.flowerWhite} />
          </div>
        </motion.div>
        <motion.div
          style={{ zIndex: 3, width: '100%', height: '100%' }}
          alt="profile_bg"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delayChildren: 0.5 }}
        >
          <Map mapStyle="fresh" plugins={mapPlugins} center={mapCenter} zoom={6}>
            <Marker position={markerPosition} events={{ click: openMapApp }} />
          </Map>
        </motion.div>
      </motion.div>
      <div className="circle-container" />
      <h2 className="head-text">陈曦 & 江宇薇</h2>
      <p className="bold-text">2023 年 9 月 16 日</p>
      <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p>
      <p className="bold-text">静待光临</p>
    </>
  );
};

// export default Location;

export default AppWrap(
  MotionWrap(Location),
  'location',
);
