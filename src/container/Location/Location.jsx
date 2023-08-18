import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { Map, Marker } from 'react-amap';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { Flower } from '../../components';
import './Location.scss';
import TMapGL from './TMapGL';

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
  const mapRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const initMap = () => {
    TMapGL().then(() => {
      const centerLngLat = new window.TMap.LatLng(28.678541, 115.805838);
      const map = new window.TMap.Map('containerMap', {
        draggable: false, // 不允许拖拽地图
        center: centerLngLat, // 设置中心点经纬度
        mapStyleId: 'style1',
      });
      // eslint-disable-next-line no-unused-vars
      const marker = new window.TMap.MultiMarker({
        id: 'marker-layer',
        map,
        styles: {
          marker: new window.TMap.MarkerStyle({
            src: images.marker,
            width: 36,
            height: 36,
          }),
        },
        geometries: [{
          id: 'demo',
          styleId: 'marker',
          position: centerLngLat,
          properties: {
            title: 'marker',
          },
        }],
      });
      map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.SCALE); // 隐藏比例尺控件
      map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.ROTATION); // 隐藏旋转控件
      mapRef.current = map;
    });
  };

  const handleButtonClick = () => {
    // 构建要跳转的 URL
    const url = 'https://www.amap.com/search?query=%E4%B8%87%E5%98%89%E7%9B%9B%E5%AE%B4&city=310000&geoobj=121.221348%7C30.779464%7C122.276617%7C31.725875&zoom=9.67';

    // 在新标签页中打开链接
    window.open(url, '_blank');
  };

  useEffect(() => {
    initMap();
  }, []);
  // const longitude = 115.805838;
  // const mapCenter = { longitude: 115.805838, latitude: 28.678541 };
  // const markerPosition = { longitude: 115.805838, latitude: 28.678541 };
  // const mapPlugins = ['ToolBar'];

  // const openMapApp = () => {
  //   const mapUrl = `https://uri.amap.com/marker?position=${longitude},${latitude}&name=标注位置&src=e65f9f97072c92b72bcd6aef75936b25`;
  //   window.location.href = mapUrl;
  // };

  // eslint-disable-next-line implicit-arrow-linebreak
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
          id="containerMap"
          style={{ zIndex: 3, width: '100%', height: '100%' }}
          alt="profile_bg"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, delayChildren: 0.5 }}
          onClick={handleButtonClick}
        >
          {/* <Map mapStyle="fresh" plugins={mapPlugins} center={mapCenter} zoom={6}>
            <Marker position={markerPosition} />
          </Map> */}
        </motion.div>
        <input type="button" />
      </motion.div>
      <div className="circle-container" />
      <h2 className="head-text">陈曦 & 江宇薇</h2>
      <p className="bold-text">2023 年 9 月 16 日</p>
      <p className="p-text">今宵明朗结良缘，相约豫章庆盛年。</p>
      <p className="bold-text">静待光临</p>
    </>
  )
  // eslint-disable-next-line semi-style
  ;
};

// export default Location;

export default AppWrap(
  MotionWrap(Location),
  'location',
);
